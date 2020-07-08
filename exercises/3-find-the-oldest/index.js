/**This function returns the oldest person from an array of objects representing people with a birth and death year, 
 * If the death year isn't specified, function uses the current age.
 *
 * @param {array} people - array of objects which contain three keys about people; name, year of birth, year of death(optional)
 * @returns {object} - object that contains the oldest person
 *
 * @example
 *
 * const people=[
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ];
 * console.log(findTheOldest); // {name:'Ray', yearOfBirth:1962, yearOfDeath:2011}
 *
 */
let findTheOldest = function (people) {
  let oldAge = 0;
  let oldMan = "";
  for (let elm of people) {
    var dt = new Date();
    let age =
      "yearOfDeath" in elm
        ? elm.yearOfDeath - elm.yearOfBirth
        : dt.getFullYear() - elm.yearOfBirth;
    if (age > oldAge) {
      oldAge = age;
      oldMan = elm;
    }
  }
  return oldMan;
};

module.exports = findTheOldest;
