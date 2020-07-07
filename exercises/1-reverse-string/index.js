/**This function reverses a given string
 *
 * @param {string} str - the initial string
 * @returns {string} - the reversed string
 *
 * @example
 *
 * const reverseString=('Hello World');
 * console.log(reverseString); // 'dlroW olleH'
 *
 */
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

module.exports = reverseString;
