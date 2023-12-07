/**
 *
 * @param {string} value
 */
export function capitalize(value) {
  return value[0].toUpperCase() + value.substring(1);
}

/**
 *
 * @param {string} value
 */
export function reverseString(value) {
  const reversed = value.split("").reverse().join("");
  return reversed;
}

export const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return { add, subtract, divide, multiply };
})();

export function caesarCipher(value, shiftFactor) {
  let shiftedString = "";

  for (let char of value.split("")) {
    shiftedString += shiftCharacter(char, shiftFactor);
  }

  return shiftedString;
}

/**
 *
 * @param {string} char
 */
function shiftCharacter(char, shiftFactor) {
  const plainText = " .,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  for (let i = 0; i < plainText.length; i++) {
    if (char.toUpperCase() === plainText[i]) {
      return plainText[(i + shiftFactor) % plainText.length];
    }
  }
  return null;
}

/**
 *
 * @param {Array} array
 */
export function analyzeArray(array) {
  return {
    average: getAvg(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function getAvg(array) {
  return array.reduce((total, element) => total + element, 0) / array.length;
}

function getMin(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

function getMax(array) {
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}
