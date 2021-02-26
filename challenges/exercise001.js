function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice + ((vatRate / 100) * originalPrice)).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice - ((reduction / 100) * originalPrice)).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var i;
  for (i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(item => item.type === 'Linux').length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return parseFloat((scores.reduce((acc, val) => acc + val, 0) / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 !== 0) {
    return ("fizz");
  }

  else if (n % 5 === 0 && n % 3 !== 0) {
    return ("buzz");
  }

  else if (n % 5 === 0 && !n % 3 === 0) {
    return ("fizzbuzz");
  }
  else {
    return 4;
  }

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
