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

module.exports = middle;