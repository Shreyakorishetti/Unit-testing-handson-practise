import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

const component = await fixture(html `<loan-header></loan-header>`);

const button1 = component.shadowRoot.querySelectorAll('button');


describe('loan-header', () => {
  // Write test cases inside this block
  it('component access', () => {
    expect(component).to.be.accessible;
  });

  it('button1 action', () => {
    const action = Sinon.spy(component,"localeChanged(e)");
    button1[0].click();
    expect(action.calledOnce).to.be.true;
  });

  it('button1 action', () => {
    const action = Sinon.spy(component,"localeChanged(e)");
    button1[1].click();
    expect(action.calledOnce).to.be.false;
  }); 

});
