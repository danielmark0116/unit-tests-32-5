const calculateStylePoints = styleNotes => {
  if (
    Array.isArray(styleNotes) &&
    styleNotes.every(item => Number.isFinite(item)) &&
    styleNotes.length === 5
  ) {
    const notesToSum = styleNotes
      .sort((a, b) => a - b)
      .slice(1)
      .slice(0, -1);

    const styleNote = notesToSum.reduce((prev, curr) => prev + curr, 0);

    return styleNote;
  }

  return null;
};

module.exports = calculateStylePoints;
