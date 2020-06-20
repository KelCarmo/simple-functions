function firstDegree(a, b, x) {
  return a * x + b
}

function firstDegreeCurry1(a) {
  return function(b) {
      return function(x) {
        return a * x + b;
      }
  };
}

// or ...

const firstDegreeCurry2 = (a) => (b) => (x) => a * x + b;

module.exports = firstDegreeCurry2;