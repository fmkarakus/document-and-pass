/**This function finds nth fibonacci number, converts strings into numbers, returns "OOPS" if the number is negative.
 *
 * @param {number} num - the rank of fibonacci number
 * @returns {number} - the num'th fibonacci number
 *
 * @example
 *
 * const fibonacci=(6);
 * console.log(fibonacci); // 8
 *
 */
const fibonacci = (num) => {
  let a = 0;
  let b = 1;
  let c = 1;
  if (num < 0) {
    c = "OOPS";
  } else {
    for (let i = 0; i < Number(num) - 1; i++) {
      c = a + b;
      a = b;
      b = c;
    }
  }
  return c;
};

module.exports = fibonacci;
