/**This function repeats the string a given number of times
 *
 * @param {string} str - the initial string
 * @param {number} num - number of times the string will be repeated
 * @returns {string} - the repeated string
 *
 * @example
 *
 * const repeatString=('Hey', 3);
 * console.log(repeatString); // 'HeyHeyHey'
 *
 */
const repeatString = (str, num) => {
  let result = "";
  if (num < 0) {
    result = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
};

module.exports = repeatString;
