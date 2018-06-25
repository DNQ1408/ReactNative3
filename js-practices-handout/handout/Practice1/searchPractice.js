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
}

module.exports = search
