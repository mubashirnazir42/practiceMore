"use strict";

const calcAmplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  console.log(max);
  console.log(min);

  return `amplitude of this array will be ${max - min}`;
};

console.log(calcAmplitude([4, 3, 21, 333]));
