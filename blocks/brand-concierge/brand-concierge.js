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
        datastreamId: 'fd4950f7-46e9-4075-85e9-5059197a48a0',
        orgId: '2FBC7B975CFE21C40A495FBB@AdobeOrg',
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
      const stylingConfigurations = window.styleConfigurations || window.styleConfiguration;
      window.adobe.concierge.bootstrap({
        instanceName: 'alloy',
        stylingConfigurations,
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
