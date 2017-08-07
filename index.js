module.exports = function fooBar(value) {
  if (value > 50) {
    return 'foo';
  } else if (value <= 50) {
    return 'bar';
  } else {
    return 'uh?';
  }
};
