/**
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
