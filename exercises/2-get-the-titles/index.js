/**This function gets the titles of books from an object that contains arrays of  book titles and authors
 *
 * @param {object} books - an object that contains arrays that contains book titles and authors
 * @returns {array} - an array that contains book titles
 *
 * @example
 *
 * const const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];
 * getTheTitles(books) // ['Book','Book2']
 *
 */
const getTheTitles = (books) => {
  let result = [];
  for (let book of books) {
    result.push(book.title);
  }
  return result;
};

module.exports = getTheTitles;
