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

const without = function(sourceArray, itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let toBeAdded = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        toBeAdded = false;
      }
    }
    if (toBeAdded === true) {
      finalArray.push(sourceArray[i]);
    }
  }
  return finalArray;
};

// alternative solution
const withoutAlternateSolution = function(sourceArray, itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i]) === false) {
      finalArray.push(sourceArray[i]);
    }
  }
  return finalArray;
};


// Tests for without
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1, 2]), []);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Tests for alternative
console.log("------------ Alternative testing ------------------");
assertArraysEqual(withoutAlternateSolution([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(withoutAlternateSolution(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(withoutAlternateSolution([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(withoutAlternateSolution([], [1, 2]), []);


withoutAlternateSolution(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);