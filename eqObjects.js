const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  let array1 = Object.keys(object1); //Object.keys() returns an array with all the keys in object
  let array2 = Object.keys(object2);
  
  if (array1.length !== array2.length) {
    return false;
  }

  for (let key of array1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const output = eqArrays(object1[key], object2[key]); //check if both arrays are equal
      if (output === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) { //both arrays are equal. now for every key iteration, check if value is the same
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

