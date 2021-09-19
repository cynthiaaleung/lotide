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

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let key of array1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const output = eqArrays(object1[key], object2[key]);
      if (output === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //import util library's inspect func so we can use it
  // console.log(`Example label: ${inspect(actual)}`) : this is an example of how to use inspect

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" });
assertObjectsEqual({ a: "1", b: "2" }, { b: "1", a: "2", c: "3" });