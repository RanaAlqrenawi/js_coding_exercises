function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => x < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(x => x.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.charAt(0) === 't' && word.charAt(1) === 'o' && word.charAt(2) === ' ');
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => Number.isInteger(x));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let allCities = [];
  for (let i = 0; i < users.length; i++) {
    allCities[i] = users[i].data.city.displayName;
  }
  return allCities.flat();
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(x => parseFloat(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let regx = new RegExp(str.toLowerCase());
  return sentences.filter(x => x.toLowerCase().match(regx));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let results = [];
  for (let i = 0; i < triangles.length; i++) {
    results[i] = Math.max(...triangles[i]);
  }
  return results;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
