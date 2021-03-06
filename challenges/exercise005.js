const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n) && nums.indexOf(n) !== nums.length - 1) {
    return nums[nums.indexOf(n) + 1];
  } else {
    return null;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let count1 = (str.match(/1/g) || []).length;
  let count0 = (str.match(/0/g) || []).length;
  return { "0": count0, "1": count1 };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sums = [];
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      sum += arrs[i][j]
    }
    sums.push(sum);
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  } else {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let isSearchTerm = false;
  for (let key in haystack) {
    if (typeof haystack[key] == 'string') {
      if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  }
  return isSearchTerm;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let output = {};
  let removeChars = str.replace(/[^a-zA-Z ]/g, "")
  let words = removeChars.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (output[words[i].toLowerCase()] === undefined) {
      output[words[i].toLowerCase()] = 1;
    }
    else {
      output[words[i].toLowerCase()] += 1;
    }
  }
  return output;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
