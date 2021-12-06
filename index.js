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
module.exports.degreeSc = function degreeSc(a) {
  return a ** 2
}

// returns the third level of the number
module.exports.degreeTh = function degreeTh(a) {
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

// Math.abs() method
module.exports.abs = function abs(a, b) {
  return Math.abs(a, b);
}

// Math.sin() method
module.exports.sin = function sin(a) {
  return Math.sin(a * Math.PI / 180);
}

// Math.cos method
module.exports.cos = function cos(a) {
  return Math.cos(a * Math.PI / 180);
}

// Math.min method
module.exports.min = function min(...args) {
  return Math.min(...args)
}

// Math.max method
module.exports.max = function max(...args) {
  return Math.max(...args)
}

// Math.random method
module.exports.random = function random() {
  return Math.random()
}


// Math.round() method
module.exports.round = function round(a) {
  return Math.round(a);
}

// Math.ceil() method
module.exports.ceil = function ceil(a) {
  return Math.ceil(a);
}

// Math.floor method
module.exports.floor = function floor(a) {
  return Math.floor(a);
}

// Math.trunc() method
module.exports.turnc = function turnc(a) {
  return Math.trunc(a);
}

// Math.sign() method
module.exports.sign = function sign(a) {
  return Math.sign(a);
}

// Math.log method
module.exports.log = function log(a) {
  return Math.log(a)
}

// Math.log2 method
module.exports.log2 = function log2(a) {
  return Math.log2(a)
}

// Math.log method
module.exports.log10 = function log10(a) {
  return Math.log10(a)
}