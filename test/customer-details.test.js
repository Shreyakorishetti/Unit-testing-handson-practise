import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

const component = await fixture(html `<customer-details></customer-details>`);

const button = component.shadowRoot.querySelectorAll('lion-button');


describe('customer details', () => {
  // Write test cases inside this block
  it('component access', () => {
    expect(component).to.be.accessible;
  });

  it('button action', () => {
    const action = Sinon.spy(component,"_toEmidetails");
    button.click();
    expect(action.calledOnce).to.be.true;
  });

  it('response is 200',() =>{
    synOnProperty(router,'/success','get').and.returnValue('/success');
  });
  it('response is not 200',() =>{
    synOnProperty(router,'/error','get').and.returnValue('/error');
  });

});
