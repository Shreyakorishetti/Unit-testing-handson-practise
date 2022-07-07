import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { LoanEMIDetails } from '../src/LoanEMIDetails/LoanEMIDetails.js';

const component = await fixture(html `<loanemi-details></loanemi-details>`);

const button = component.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('component access', () => {
    expect(component).to.be.accessible;
  });

  // beforeEach(() => {
  //   const onClickMock = new LoanEMIDetails();
  // });
  // it('on click to basic details', () =>{
  //   expect(onClickMock._toBasicDetails).toHaveBeenCalled();
  // });
  // it('on click go to customer', () =>{
  //   expect(onClickMock._toCustomer).toHaveBeenCalled();
  // });
  // it('should get an item', () => {
  //   var store = {};
  //   spyOn(localStorage,'getItem').and.callFake((key:string):String => {
  //     return store[key];
  //   });
  //   expect(localStorage.getItem('emi')).toBe('emi');
  // });

  it('button action', () => {
    const action = Sinon.spy(component,"_toBasicDetails");
    button[0].click();
    expect(action.calledOnce).to.be.true;
  });

  it('button action', () => {
    const action = Sinon.spy(component,"_toCustomer");
    button[1].click();
    expect(action.calledOnce).to.be.false;
  });

});
