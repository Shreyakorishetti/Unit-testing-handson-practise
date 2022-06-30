import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { LoanEMIDetails } from '../src/LoanEMIDetails/LoanEMIDetails.js';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  beforeEach(() => {
    const onClickMock = new LoanEMIDetails();
  });
  it('on click to basic details', () =>{
    expect(onClickMock._toBasicDetails).toHaveBeenCalled();
  });
  it('on click go to customer', () =>{
    expect(onClickMock._toCustomer).toHaveBeenCalled();
  });
  it('should get an item', () => {
    var store = {};
    spyOn(localStorage,'getItem').and.callFake((key:string):String => {
      return store[key];
    });
    expect(localStorage.getItem('emi')).toBe('emi');
  });
});
