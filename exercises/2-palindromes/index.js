/**This function finds out whether given string is a palindrome or not.
 *
 * @param {string} str - the given string
 * @returns {boolean} - true if the string is a palindrome, false otherwise.
 *
 * @example
 *
 * const palindromes=('Racecar');
 * console.log(palindromes); // True
 *
 */
const palindromes = (str) => {
  let base = str
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(" ")
    .join("");
  let rvs = base.split("").reverse().join("");
  return base === rvs;
};

module.exports = palindromes;
