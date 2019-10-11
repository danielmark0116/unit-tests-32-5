const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (
  distance,
  hillSize,
  kPoint,
  styleNotes,
  windFactor,
  gateFactor
) => {
  if (Number.isFinite(windFactor) && Number.isFinite(gateFactor)) {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    if (distancePoints && stylePoints) {
      return parseFloat(
        (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1)
      );
    }
  }

  return null;
};

module.exports = calculateTotalPoints;
