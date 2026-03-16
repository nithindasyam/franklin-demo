/* eslint-disable no-unused-expressions */
/* global describe it */

import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';

import decorate from '../../../blocks/brand-concierge/brand-concierge.js';

describe('Brand Concierge block', () => {
  it('passes stylingConfigurations in bootstrap payload', async () => {
    window.history.replaceState({}, '', '/concierge-test');

    const block = document.createElement('div');
    block.className = 'brand-concierge';
    document.body.append(block);

    window.styleConfiguration = { theme: { '--color-primary': '#1473e6' } };

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
});
