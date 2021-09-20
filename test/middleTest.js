const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] for middle([])", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for middle([1, 2])", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for middle([1, 2, 3])", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
    assert.deepEqual(middle([]), []);
  });
});

