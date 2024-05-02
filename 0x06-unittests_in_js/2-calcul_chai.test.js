const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should perform SUM operation', function() {
    expect(calculateNumber('SUM', 2.1, 3.8)).to.equal(5.9);
  });

  it('should perform SUBTRACT operation', function() {
    expect(calculateNumber('SUBTRACT', 7.5, 2.9)).to.equal(4.6);
  });

  it('should perform DIVIDE operation', function() {
    expect(calculateNumber('DIVIDE', 10.5, 2.1)).to.equal(5);
  });

  it('should return Error for DIVIDE by zero', function() {
    expect(calculateNumber('DIVIDE', 10.5, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', function() {
    expect(() => calculateNumber('INVALID', 2.0, 2.0)).to.throw(Error, 'Invalid operation');
  });
});
