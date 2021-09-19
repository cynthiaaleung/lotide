const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};

  for (let letter of string) {
    if (letter !== " ") { //if letter is space, it will not go into latter blocks, it will loop next letter
      if (results[letter]) { //if the value at the current letter position exists, increment that value by 1
        results[letter] += 1;
      } else { //if there is not value at current letter postiion, it is set to 1
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));
console.log(countLetters("Boot camp"));
