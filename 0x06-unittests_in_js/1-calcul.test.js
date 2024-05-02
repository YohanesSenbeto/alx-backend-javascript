const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should perform SUM operation', () => {
    assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
  });

  it('should perform SUBTRACT operation', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
  });

  it('should perform DIVIDE operation', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
  });

  it('should return Error for DIVIDE by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0), 'Error');
  });

  it('should throw an error for invalid operation type', () => {
    assert.throws(() => calculateNumber('INVALID', 2.0, 2.0), Error);
  });
});
