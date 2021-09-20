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



const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item) === true) {
      return result;
    }
    result.push(item);
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

/// more testing
const data3 = [1, 2, 5, 7];
const results3 = takeUntil(data3, x => x === 1);
console.log(results3);

console.log('---');

const data4 = [1, 2, 5, 7, 8];
const results4 = takeUntil(data4, x => x < 9);
console.log(results4);

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data3, x => x === 1),[]);
assertArraysEqual(takeUntil(data4, x => x > 9),[ 1, 2, 5, 7, 8 ]);

module.exports = takeUntil;