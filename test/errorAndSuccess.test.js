import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('success message',() => {
    const congo = 'Congratulations';
    const scsDesc = 'Your loan Form is submitted successfully. Bank representative will call you for further details.';
    expect(congo).tobe('Congratulations');
    expect(scsDesc).tobe('Your loan Form is submitted successfully. Bank representative will call you for further details');
  });
  it('should call onclick method',() => {
    const onClickMocks = spyOn(component,'click');
    expect(click).toHaveBeenCalled();
  })
});

describe('error screen', () => {
  // Write test cases inside this block
  it('error message',() =>{
    const msg = 'Oops';
    expect(msg).tobe('Oops');
    const errDesc ='Your loan Form is not submitted.Please try again';
    expect(errDesc).tobe('Your loan Form is not submitted.Please try again');
  });
  it('should call onclick method',() => {
    const onClickMock = spyOn(component, 'click');
    expect(click).toHaveBeenCalled();
  });

});
