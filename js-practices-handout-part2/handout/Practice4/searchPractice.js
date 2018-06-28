'use strict'

function binarySearch(input, target) {
  const left = 0;
  const right = input.length - 1

  function search(a, b) {
    const mid = Math.floor((a + b) / 2)
    return a > b ?
      -1 : target == input[mid] ?
      mid : target > input[mid] ?
      search(mid + 1, b) :
      search(a, mid - 1)
  }
  return search(left, right)
}

module.exports = binarySearch