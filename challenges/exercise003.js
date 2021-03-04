function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(value => Math.pow(value, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let firstWord = words[0].charAt(0).toLowerCase() + words[0].slice(1);
  return firstWord + words.slice(1).flatMap(word => [word.charAt(0).toUpperCase() + word.slice(1)]).join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let allSub = [];
  for (let i = 0; i < people.length; i++) {
    allSub[i] = people[i].subjects.concat().flat();
  }
  return allSub.flat().length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  let allIng = [];
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    allIng[i] = menu[i].ingredients.concat().flat();
  }
  return allIng.flat().includes(ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  return Array.from(new Set(arr1.filter(item => arr2.indexOf(item) >= 0))).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
