const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should perform SUM operation', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return Error for DIVIDE by zero', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', function() {
    expect(() => calculateNumber('INVALID', 2.0, 2.0)).to.throw(Error);
  });
});
