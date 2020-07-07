/**
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
