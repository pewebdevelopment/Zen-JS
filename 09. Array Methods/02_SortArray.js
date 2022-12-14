// Write a JavaScript program to find the most frequent item of an array

//Write a JavaScript program to sort the items of an array.
var arr = [3, 8, 7, 6, 5, 4, 3, 2, 1, -7];

let sortedArr = arr.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(sortedArr);
