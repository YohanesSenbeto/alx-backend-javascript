const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with type = SUM, a = 100, and b = 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert.ok(calculateNumberStub.calledWith('SUM', 100, 20));
  });

  it('should log the correct message to the console', () => {
    sendPaymentRequestToApi(100, 20);
    assert.ok(consoleLogSpy.calledWith('The total is: 10'));
  });
});
