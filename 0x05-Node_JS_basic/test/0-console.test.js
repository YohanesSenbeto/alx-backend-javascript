const sinon = require('sinon');
const expect = require('chai').expect;
const displayMessage = require('../0-console');

describe('displayMessage', () => {
  it('prints the message to the console', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    displayMessage('Hello NodeJS!');
    expect(consoleLogSpy.calledWith('Hello NodeJS!')).to.be.true;
    consoleLogSpy.restore();
  });
});
