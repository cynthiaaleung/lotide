const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (!secondArray.includes(firstArray[i])) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let results1 = map(words, word => word[0]);
console.log(results1);

// test cases

const words1 = ["hello", "how", "are", "you"];
const nums1 = [1, 2, 5, 7, 9];
const words2 = ["what", "is", "your", "name"];

assertArraysEqual(map(words1, word1 => word1[1]), ["e", "o", "r", "o"]);
assertArraysEqual(map(nums1, nums1 => nums1 * 2), [2, 4, 10, 14, 18]);
assertArraysEqual(map(words2, word2 => word2[0] + word2[1]), ["wh", "is", "yo", "na"]);


module.exports = map;