import chai from 'chai';
const expect = chai.expect;
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  it('should perform SUM operation', () => {
    expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
  });

  it('should perform SUBTRACT operation', () => {
    expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
  });

  it('should perform DIVIDE operation', () => {
    expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
  });

  it('should return Error for DIVIDE by zero', () => {
    expect(calculateNumber('DIVIDE', 8.0, 0)).to.equal('Error');
  });

  it('should throw an error for invalid operation type', () => {
    expect(() => calculateNumber('INVALID', 2.0, 2.0)).to.throw(Error);
  });
});
