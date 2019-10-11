const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('style points', () => {
  describe('if input to evaluate is correct', () => {
    it('should be a null if input is not an array', () => {
      const received = calculateStylePoints(2);

      const expected = null;

      assert.equal(received, expected);
    });

    it('should be a null if input doesnt have only numbers', () => {
      const received = calculateStylePoints([2, 's', 2, 5, 6]);

      const expected = null;

      assert.equal(received, expected);
    });

    it('should be a null if input array.length !== 5', () => {
      const received = calculateStylePoints([2, 4]);

      const expected = null;

      assert.equal(received, expected);
    });
  });

  describe('if output is a number', () => {
    it('should be a number/float', () => {
      const received = Number.isFinite(calculateStylePoints([2, 4, 3, 5, 1]));

      const expected = true;

      assert.equal(received, expected);
    });
  });

  describe('if output sum is correct', () => {
    it('should return 54.0', () => {
      const received = calculateStylePoints([18.0, 18.0, 18.0, 17.5, 18.5]);

      const expected = 54.0;

      assert.equal(received, expected);
    });

    it('should return 55.0', () => {
      const received = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);

      const expected = 55.0;

      assert.equal(received, expected);
    });

    it('should return 52.5', () => {
      const received = calculateStylePoints([17.5, 17.5, 17.0, 17.5, 17.5]);

      const expected = 52.5;

      assert.equal(received, expected);
    });

    it('should return 56.0', () => {
      const received = calculateStylePoints([18.0, 18.5, 19.0, 19.0, 18.5]);

      const expected = 56.0;

      assert.equal(received, expected);
    });
  });
});
