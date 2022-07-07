import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const component = await fixture(html `<basic-details></basic-details>`);

const button = component.shadowRoot.querySelectorAll('lion-button');

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('component access', () => {
    expect(component).to.be.accessible;
  });

  it('button action', () => {
    const action = Sinon.spy(component,"_toDashboard");
    button[0].click();
    expect(action.calledOnce).to.be.true;
  });

  it('button action', () => {
    const action = Sinon.spy(component,"_captureDetails");
    button[1].click();
    expect(action.calledOnce).to.be.false;
  });

  it('check number to words', () => {
    const value = 1000;
    let number = 1000;
    component._numToWord(value,number);
    expect((number).to.equal(1000));
  });

});
