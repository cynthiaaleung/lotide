const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) { //check if results already has the letter at index i
        results[sentence[i]].push(i); // if true, modify obj, use push() to add the index of the letter to results
      } else {
        results[sentence[i]] = [i];
        // if false, then the index of the letter is the index of the current index
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello there").h, [0, 7]);
assertArraysEqual(letterPositions("hello friend").e, [1, 9]);
assertArraysEqual(letterPositions("hello world").o, [4, 7]);