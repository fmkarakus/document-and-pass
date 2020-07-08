/**This function takes a string to be encoded and a shift factor and then returns the encoded string.
 *Only letters will be shifted and case of letters will be unchanged.
 *
 * @param {string} str - the given string
 * @param {number} num - the shift factor
 * @returns {string} - encoded string
 *
 * @example
 *
 * const caesar=('Hello, World!', 5);
 * console.log(caesar); // 'Mjqqt, Btwqi!'
 *
 */
const caesar = (str, num) => {
  let alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let newInd = 0;
    if (alphabet.indexOf(char) === -1) {
      //this checks whether char is a letter
      newStr += char;
    } else {
      let a = alphabet.indexOf(char) + 2 * num; //num is multiplied by 2 so lowercase returns lowercase and uppercase return uppercase
      if (a < 0) {
        //This value should be positive to work with % so if negative add a number which is divisible by 52
        a += 52000;
      }
      newInd = a % 52; //new index, if the number is greater than 52 gets th remainder to start from a.
      let newChar = alphabet[newInd]; //new character
      newStr += newChar;
    }
  }
  return newStr;
};

module.exports = caesar;
