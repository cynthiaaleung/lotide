const assertEqual = require('../assertEqual');
const tail = require('../tail');
const eqArrays = require('../eqArrays');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements
assertEqual(tail(words).length, 2);
assertEqual(eqArrays(tail(words), ["Lighthouse", "Labs"]), true);//comparing 2 arrays, so need eqArrays
