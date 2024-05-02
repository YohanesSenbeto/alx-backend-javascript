import chai from "chai";
import sinon from "sinon";
const { expect } = chai;
import { sendPaymentRequestToApi } from "./3-payment.js";
import { Utils } from "./utils.js";

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const utils = new Utils();
    const calculateNumberSpy = sinon.spy(utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
