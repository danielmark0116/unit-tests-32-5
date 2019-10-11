const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('total points', () => {
  describe('if input is valid', () => {
    it('should be null - wrong stylePoints array', () => {
      const received = calculateTotalPoints(
        120,
        'normal',
        120,
        [18, 19, 19, '18', 18],
        -2,
        0
      );

      const expected = null;

      assert.equal(received, expected);
    });

    it('should be null - wrong hillSize', () => {
      const received = calculateTotalPoints(
        120,
        2,
        120,
        [18, 19, 19, 18, 18],
        -2,
        0
      );

      const expected = null;

      assert.equal(received, expected);
    });

    it('should be null - wrong type of gate/wind', () => {
      const received = calculateTotalPoints(
        120,
        2,
        120,
        [18, 19, 19, 18, 18],
        '2',
        []
      );

      const expected = null;

      assert.equal(received, expected);
    });

    it('should be null - wrong type of gate/wind', () => {
      const received = calculateTotalPoints(
        120,
        2,
        120,
        [18, 19, 19, 18, 18],
        '2',
        {}
      );

      const expected = null;

      assert.equal(received, expected);
    });
  });

  describe('if output is correcttly evaluated', () => {
    it('should output 131.8 - NORMAL HILL', () => {
      const received = calculateTotalPoints(
        111,
        'normal',
        98,
        [19, 19.5, 19, 19, 19],
        3.2,
        -14.4
      );

      const expected = 131.8;

      assert.equal(received, expected);
    });

    it('should output 113.9 - NORMAL HILL', () => {
      const received = calculateTotalPoints(
        107.5,
        'normal',
        98,
        [17.5, 17.5, 18, 18.5, 18],
        0,
        -18.6
      );

      const expected = 113.9;

      assert.equal(received, expected);
    });

    it('should output 110.3 - NORMAL HILL', () => {
      const received = calculateTotalPoints(
        103,
        'normal',
        98,
        [17.5, 17.5, 18.5, 18.5, 18.5],
        0,
        -14.2
      );

      const expected = 110.3;

      assert.equal(received, expected);
    });

    it('should output 125.9 - NORMAL HILL', () => {
      const received = calculateTotalPoints(
        106,
        'normal',
        98,
        [18.5, 19, 18.5, 18.5, 18.5],
        6.4,
        -12
      );

      const expected = 125.9;

      assert.equal(received, expected);
    });

    it('should output 137.3 - LARGE HILL', () => {
      const received = calculateTotalPoints(
        134,
        'large',
        120,
        [19, 20, 19.5, 19, 18.5],
        0,
        -5.4
      );

      const expected = 137.3;

      assert.equal(received, expected);
    });

    it('should output 122.6 - LARGE HILL', () => {
      const received = calculateTotalPoints(
        128,
        'large',
        120,
        [18.5, 18, 18, 17.5, 18],
        0,
        -5.8
      );

      const expected = 122.6;

      assert.equal(received, expected);
    });

    it('should output 112.7 - LARGE HILL', () => {
      const received = calculateTotalPoints(
        122.5,
        'large',
        120,
        [17.5, 17, 18, 18, 18],
        0,
        -5.3
      );

      const expected = 112.7;

      assert.equal(received, expected);
    });

    it('should output 113.2 - LARGE HILL', () => {
      const received = calculateTotalPoints(
        120.5,
        'large',
        120,
        [17, 17, 17, 17.5, 17.5],
        0,
        0.8
      );

      const expected = 113.2;

      assert.equal(received, expected);
    });

    it('should output 208.3 - FLYING HILL', () => {
      const received = calculateTotalPoints(
        227.5,
        'flying',
        200,
        [18, 18.5, 17.5, 18.5, 18.5],
        8.7,
        -8.4
      );

      const expected = 208.3;

      assert.equal(received, expected);
    });

    it('should output 203.3 - FLYING HILL', () => {
      const received = calculateTotalPoints(
        225,
        'flying',
        200,
        [18, 18.5, 18, 18, 19],
        8.7,
        -9.9
      );

      const expected = 203.3;

      assert.equal(received, expected);
    });

    it('should output 195.7 - FLYING HILL', () => {
      const received = calculateTotalPoints(
        226.5,
        'flying',
        200,
        [18, 18.5, 18, 19, 18.5],
        0,
        -11.1
      );

      const expected = 195.7;

      assert.equal(received, expected);
    });

    it('should output 192.2 - FLYING HILL', () => {
      const received = calculateTotalPoints(
        224.5,
        'flying',
        200,
        [17.5, 18, 18, 18, 18.5],
        0,
        -11.2
      );

      const expected = 192.2;

      assert.equal(received, expected);
    });
  });
});
