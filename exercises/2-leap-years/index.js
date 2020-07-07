/**This function finds out whether given year is a leap year or not.
 *
 * @param {number} year - the given year
 * @returns {boolean} - true if the year is a leap year, false otherwise.
 *
 * @example
 *
 * const leapYears=(1600);
 * console.log(leapYears); // True
 *
 */
const leapYears = (a) => {
  if (a % 4 === 0) {
    if (a % 100 === 0) {
      return (a / 100) % 4 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

module.exports = leapYears;
