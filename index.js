// adds the given numbers
module.exports.plus = function plus(a, b) {
  return a + b;
}

// subtracts the given numbers
module.exports.minus = function minus(a, b) {
  return a - b;
}

// multiplies the given numbers
module.exports.multiply = function multiply(a, b) {
  return a * b;
}

// divide the given numbers
module.exports.divide = function divide(a, b) {
  return a / b;
}

// returns the second level of the number
module.exports.degreePow = function degreePow(a) {
  return a ** 2
}

// returns the third level of the number
module.exports.degreeSqrt = function degreeSqrt(a) {
  return a ** 3
}

// find even or odd numbers
module.exports.evenOdd = function evenOdd(a) {
  if (a % 2 == 0) {
    return 'Even Number';
  } else {
    return 'Odd Number';
  }
}