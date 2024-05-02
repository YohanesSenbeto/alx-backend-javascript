const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call stubbed Utils.calculateNumber with correct arguments and log result', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const logSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    logSpy.restore();
  });
});
