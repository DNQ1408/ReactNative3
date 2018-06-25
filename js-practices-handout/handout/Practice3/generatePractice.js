'use strict'

function search(input, target) {
  var left = 0;
  var right = input.length - 1;
   while (left <= right)    {
    let mid = Math.floor((right + left)/2); 
    if (input[mid] > target)  right = mid - 1;
    else if(input[mid] < target)  left = mid + 1; 
      else return mid;
   }; 
   if (left > right) return -1; 
};

function sort(input) {
  for (let i = 0 ; i < input.length - 1 ; i++) {
    for (let j = i + 1 ; j < input.length ; j++) {
      if (input[i] > input[j] ) {
         let temp = input[i];
          input[i] = input[j];
          input[j] = temp;
      };
    };
  };
  return input;
};

function randomInterger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function generate(testLengthArray) {
  var objects = new Array;
  for (let i = 0; i < testLengthArray.length; i++) {
    var input = [];
    while (input.length < testLengthArray[i]) { input.push(randomInterger(-10000,10000))};
    sort(input);
    var target, output;
    if (testLengthArray.length >= 4) {
      switch (i) {
        case 0:
          target = 21489;
          output = -1;
          break;
        case 1:
          target = input[0];
          break;
        case 2:
          target = input[input.length - 1];
          break;
        case 3:
          target = input[randomInterger(1,input.length - 2)]
      }
      output = search(input,target)
      objects.push({ "input":input, "target":target, "output":output});
    } else {
      target = input[randomInterger(input.length-1)];
      output = search(input,target);
      objects.push({ "input":input, "target":target, "output":output});
    };
  };
  return objects;
};

module.exports = generate
