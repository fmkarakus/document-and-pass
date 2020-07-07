/**This function adds all the numbers inclusively between any two given numbers. Output is "ERROR" if one of the inputs in not a number
 *
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} - the sum
 *
 * @example
 *
 * const sumAll=(2, 5);
 * console.log(sumAll); // 14
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
