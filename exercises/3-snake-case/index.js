/**This function converts phrases and words into snake case
 * Rule 1: elements are separated with one underscore character (\_) and no spaces,
 * Rule 2: each element's initial letter usually lower cased
 * Rule 3: convert also camel cases, kebab cases and WTF cases into snake case.
 *
 * @param {string} str - the given string
 * @returns {string} - converted string
 *
 * @example
 *
 * const snakeCase=('Hello, World???');
 * console.log(snakeCase); // 'hello_world'
 *
 */
const snakeCase = function (str) {
  let strArray = str.split(" ");
  let resultArr = [];
  const isLowerCase = (string) => /^[a-z]*$/.test(string); // needed to identify camel cased words

  for (let word of strArray) {
    if (isLowerCase(word[0])) {
      word = word.replace(/([A-Z])/g, " $1"); // to separate camel cased words
    }
    let a = word.split("..").join(" "); // to replace '..' with spaces
    let b = a.replace("-", " "); // to replace '-' with spaces
    let c = b.split(" ").join("_"); // to replace spaces with _
    c = c.replace(/\W/g, ""); // to eliminate non-alphabetic expressions
    resultArr.push(c);
  }

  return resultArr.join("_").toLowerCase();
};

module.exports = snakeCase;
