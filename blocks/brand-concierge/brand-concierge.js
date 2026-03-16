export default function decorate(block) {
  block.textContent = '';

  const mount = document.createElement('div');
  mount.id = 'brand-concierge-mount';

  block.append(mount);

  const initBrandConcierge = () => {
    if (typeof window.alloy !== 'function' || !window.adobe?.concierge?.bootstrap) {
      return false;
    }

    if (!window.brandConciergeConfigured) {
      window.alloy('configure', {
        defaultConsent: 'in',
        edgeDomain: 'edge.adobedc.net',
        edgeBasePath: 'ee',
        datastreamId: 'be8284da-9263-4221-b560-de51dd10d34f',
        orgId: '745F373C5EAB776E0A49421B@AdobeOrg',
        debugEnabled: true,
        idMigrationEnabled: false,
        thirdPartyCookiesEnabled: false,
        prehidingStyle: '.personalization-container { opacity: 0 !important }',
        onBeforeEventSend: (options) => {
          const params = new URLSearchParams(window.location.search);
          const titleParam = params.get('filter');
          const xdm = options.xdm || {};
          // eslint-disable-next-line no-underscore-dangle
          xdm._web = xdm._web || {};
          // eslint-disable-next-line no-underscore-dangle
          xdm._web.webPageDetails = xdm._web.webPageDetails || {};
          // eslint-disable-next-line no-underscore-dangle
          xdm._web.webPageDetails.name = titleParam || 'test-page';
          options.xdm = xdm;
          return true;
        },
      });
      window.alloy('sendEvent', {});
      window.brandConciergeConfigured = true;
    }

    if (!window.brandConciergeBootstrapped) {
      window.adobe.concierge.bootstrap({
        instanceName: 'alloy',
        stylingConfiguration: window.styleConfiguration,
        selector: '#brand-concierge-mount',
      });
      window.brandConciergeBootstrapped = true;
    }

    return true;
  };

  if (!initBrandConcierge()) {
    window.setTimeout(initBrandConcierge, 300);
  }
}
