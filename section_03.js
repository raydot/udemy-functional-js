let arr = [1, 2, 3, 4, 5];

// Reduce
let total = arr.reduce(function (accumulator, elem) {
  // HOF, takes a function, returns an array
  return accumulator + elem;
}, 0); // 0 = initialize accumulator

// Map
let newArray = arr.map(function (val) {
  //, index, array) { // (index and array are optional params)
  return val ** 2; // ES6 exponent syntax = val ^ 2
});

// Filter
let filterArray = arr.filter(function (val) {
  // must pass in predicate function (returns T or F)
  return val < 3;
});

console.log(total);
console.log(newArray);
console.log(filterArray);
