// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs",];

const tail = function(words) {
  const tailArray = words.slice(1);
  return tailArray;
};

console.log(tail(words));




assertEqual(words.length, 3); // original array should still have 3 elements!
