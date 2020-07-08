/**
 *
 */
const snakeCase = function (str) {
  let a = str.toLowerCase();

  let b = a.replace(/ /g, "_");
  let c = b.replace(/../g, "_");
  let d = c.replace(/\W/g, "");
  return d;
};

module.exports = snakeCase;
