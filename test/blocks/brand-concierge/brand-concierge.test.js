/* eslint-disable no-unused-expressions */
/* global describe it beforeEach afterEach */

import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';

import decorate from '../../../blocks/brand-concierge/brand-concierge.js';

describe('Brand Concierge block', () => {
  beforeEach(() => {
    delete window.brandConciergeConfigured;
    delete window.brandConciergeBootstrapped;
    delete window.alloy;
    delete window.adobe;
    delete window.styleConfiguration;
    delete window.styleConfigurations;
    document.body.innerHTML = '';
  });

  afterEach(() => {
    delete window.brandConciergeConfigured;
    delete window.brandConciergeBootstrapped;
    delete window.alloy;
    delete window.adobe;
    delete window.styleConfiguration;
    delete window.styleConfigurations;
  });

  it('passes stylingConfigurations in bootstrap payload', async () => {
    window.history.replaceState({}, '', '/concierge-test');

    const block = document.createElement('div');
    block.className = 'brand-concierge';
    document.body.append(block);

    window.styleConfigurations = { theme: { '--color-primary': '#1473e6' } };

    const alloyStub = sinon.stub();
    window.alloy = alloyStub;

    const bootstrapSpy = sinon.spy((payload) => {
      if (!payload.stylingConfigurations) {
        throw new Error('Invalid WebSDK payload - missing stylingConfigurations');
      }
    });

    window.adobe = {
      concierge: {
        bootstrap: bootstrapSpy,
      },
    };

    await decorate(block);

    expect(bootstrapSpy.calledOnce).to.be.true;
    expect(bootstrapSpy.firstCall.args[0]).to.have.property('stylingConfigurations');
  });

  it('does not initialize outside concierge URLs', async () => {
    window.history.replaceState({}, '', '/about');

    const block = document.createElement('div');
    block.className = 'brand-concierge';
    block.textContent = 'placeholder';
    document.body.append(block);

    const alloyStub = sinon.stub();
    window.alloy = alloyStub;
    const bootstrapSpy = sinon.spy();
    window.adobe = {
      concierge: {
        bootstrap: bootstrapSpy,
      },
    };

    await decorate(block);

    expect(alloyStub.called).to.be.false;
    expect(bootstrapSpy.called).to.be.false;
    expect(block.querySelector('#brand-concierge-mount')).to.not.exist;
  });
});
