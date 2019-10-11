const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (
    Number.isFinite(distance) &&
    typeof hillSize === 'string' &&
    ['normal', 'large', 'flying'].includes(hillSize) &&
    Number.isFinite(kPoint)
  ) {
    let basePoints = ['normal', 'large'].includes(hillSize) ? 60 : 120;

    switch (hillSize) {
      case 'normal':
        basePoints += (distance - kPoint) * 2;
        break;
      case 'large':
        basePoints += (distance - kPoint) * 1.8;
        break;
      case 'flying':
        basePoints += (distance - kPoint) * 1.2;
        break;
      default:
        break;
    }

    return basePoints;
  }

  return null;
};

module.exports = calculateDistancePoints;
