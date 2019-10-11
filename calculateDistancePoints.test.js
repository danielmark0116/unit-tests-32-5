const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('distance points', () => {
  describe('if input is valid', () => {
    it('should be a null if input is invalid', () => {
      const received = calculateDistancePoints('s', 's', 2);

      const expected = null;

      assert.equal(received, expected);
    });
  });

  describe('if output is correcttly evaluated - FLYING HILL', () => {
    it('should return 153 - FLYING', () => {
      const received = calculateDistancePoints(227.5, 'flying', 200);

      const expected = 153;

      assert.equal(received, expected);
    });

    it('should return 147.6 - FLYING', () => {
      const received = calculateDistancePoints(223.0, 'flying', 200);

      const expected = 147.6;

      assert.equal(received, expected);
    });
  });

  describe('if output is correcttly evaluated - NORMAL HILL', () => {
    it('should return 86 - NORMAL', () => {
      const received = calculateDistancePoints(111.0, 'normal', 98);

      const expected = 86;

      assert.equal(received, expected);
    });

    it('should return 58 - NORMAL', () => {
      const received = calculateDistancePoints(97, 'normal', 98);

      const expected = 58;

      assert.equal(received, expected);
    });
  });

  describe('if output is correcttly evaluated - LARGE HILL', () => {
    it('should return 85.2 - LARGE', () => {
      const received = calculateDistancePoints(134, 'large', 120);

      const expected = 85.2;

      assert.equal(received, expected);
    });

    it('should return 70.8 - LARGE', () => {
      const received = calculateDistancePoints(126, 'large', 120);

      const expected = 70.8;

      assert.equal(received, expected);
    });
  });
});
