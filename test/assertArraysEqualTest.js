const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["Bootcamp", "Is", "Awesome"], ["Bootcamp", "Is", "Awesome"]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); //should fail
assertArraysEqual([7, 2, 5], [7, 2]); //should fail