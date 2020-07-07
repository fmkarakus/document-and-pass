/**Implement a function that takes an array and some other arguments then removes the other arguments from that array
 *
 * @param {array} arr - the initial array
 * @param {arguments} args - the arguments to be removed
 * @returns {array} - the final array
 *
 * @example
 *
 * const removeFromArray=([1, 2, 3, 4], 3);
 * console.log(removeFromArray); // [1,2,4]
 *
 */
const removeFromArray = (arr, ...args) => {
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === args[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

module.exports = removeFromArray;
