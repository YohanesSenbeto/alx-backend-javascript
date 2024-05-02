const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log result', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const logStub = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(logStub.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
    logStub.restore();
  });
});
