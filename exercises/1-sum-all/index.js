/**
 *
 */
const sumAll = (a, b) => {
  let sum = 0;
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    sum = "ERROR";
  } else {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }
  }
  return sum;
};

module.exports = sumAll;
