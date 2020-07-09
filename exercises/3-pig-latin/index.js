/**This function takes the words given and turns them into pig latin.
 * Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
 * Rule 2: If a word begins with a consonant sound, move it to the end of the word,
 * and then add an "ay" sound to the end of the word.
 * Rule 3: counts "qu" as a single phoneme
 * Rule 4: counts "qu" as a consonant even when its preceded by a consonant
 *
 * @param {string} str - the given string
 * @returns {string} - translated string
 *
 * @example
 *
 * const translate=("the quick brown fox");
 * console.log(translate); // "ethay ickquay ownbray oxfay"
 *
 */
const translate = (str) => {
  let vowels = "aeiou";
  let arrWords = str.split(" ");
  let s = [];
  console.log(arrWords);

  for (let elm of arrWords) {
    let arr = elm.split("");
    for (let item of arr) {
      if (elm[0] === "q" && elm[1] === "u") {
        arr.shift();
        arr.shift();
        arr.push("qu");
        elm = arr.join("");
      } else if (vowels.indexOf(arr[0]) === -1) {
        arr.shift();
        arr.push(elm[0]);
        elm = arr.join("");
      } else {
        elm += "ay";
        s.push(elm);
        break;
      }
    }
    str = s.join(" ");
  }
  return str;
};

module.exports = translate;
