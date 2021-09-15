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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let finalArray = [];
  if (array.length < 3) { // takes care of condition that array is empty/1 item/2 items
    return finalArray;
  } else if (array.length % 2 !== 0) { //this is for odd case
    let middleIndex = (array.length - 1) / 2;
    finalArray.push(array[middleIndex]);
    return finalArray;
  } else { // this is for even case
    let middleIndex = array.length / 2;
    finalArray.push(array[middleIndex - 1]); // we want the middle 2 items
    finalArray.push(array[middleIndex]);
    return finalArray;
  }
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);