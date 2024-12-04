function analyzeArray(arr) {
  let sorted = arr.sort();
  let sum = arr.reduce((sum, curr) => sum + curr);
  return {
    average: sum / arr.length,
    min: sorted.at(0),
    max: sorted.at(-1),
    length: arr.length,
  };
}

module.exports = analyzeArray;
