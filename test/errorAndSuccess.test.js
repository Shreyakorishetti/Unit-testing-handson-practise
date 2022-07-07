import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const component = await fixture(html `<loan-error></loan-error>`);
const button = component.shadowRoot.querySelectorAll('lion-button');

const component1 = await fixture(html `<loan-success></loan-success>`);
const button1 = component.shadowRoot.querySelectorAll('lion-button');

describe('Success screen ', () => {
  // Write test cases inside this block
  it('component1  access', () => {
    expect(component1).to.be.accessible;
  });

  // it('success message',() => {
  //   const congo = 'Congratulations';
  //   const scsDesc = 'Your loan Form is submitted successfully. Bank representative will call you for further details.';
  //   expect(congo).tobe('Congratulations');
  //   expect(scsDesc).tobe('Your loan Form is submitted successfully. Bank representative will call you for further details');
  // });
  it('button1 action',() => {
    const action = Sinon.spy(component,"_toHome");
    button.click();
    expect(action.calledOnce).to.be.true;
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  it('component access', () => {
    expect(component).to.be.accessible;
  });

  // it('error message',() =>{
  //   const msg = 'Oops';
  //   expect(msg).tobe('Oops');
  //   const errDesc ='Your loan Form is not submitted.Please try again';
  //   expect(errDesc).tobe('Your loan Form is not submitted.Please try again');
  // });
  it('button action',() => {
    const action = Sinon.spy(component,"_toHome");
    button.click();
    expect(action.calledOnce).to.be.true;
  });

});
