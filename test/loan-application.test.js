import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';
import { LoanApplication } from '../src/LoanApplication.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it(' should increment the count by 1', () => {
  const incCounter = new LoanApplication();
  incCounter.counter = 5
  incCounter.__increment()
  expect(incCounter.__increment()).tobe(6);
  });
  it('set the title', () => {
    const setTitle = new LoanApplication();
    setTitle.title = "Hey There";
    expect(setTitle.title).toBe('Hey There');
  });
  it('for get properties', () => {
    spyOnProperty(counter, Number, "get").and.returnValue(5);
    expect(counter.Number).not.toBeNaN;
  });
});
