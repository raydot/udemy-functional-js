const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

// any scores < 10 need to be multiplied by 10 and value included
// const arr1 = scores.filter(gt10);

// function gt10(val) {
//   return val < 10 ? val * 10 : val;
// }
const arr1 = scores.filter((val) => {
  //console.log("val: ", val > 10);
  if (val < 10) {
    return val * 10;
  }
  return val;
});

// remove any scores > 100
const arr2 = arr1.filter(function (val) {
  return val < 100;
});

// remove any scores ≤ 0
const arr3 = arr2.filter(function (val) {
  return val > 0;
});

// Sum the scores using reduce
const arr4 = arr3.reduce(function (accumulator, val) {
  return accumulator + val;
});

// Provide a count for the number of scores remaining using reduce
const int1 = arr3.reduce(function (x, y, index) {
  return index;
});

console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);
console.log("int1:", int1);

// ANSWER

const scores2 = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = scores2.map(function (val) {
  return val < 10 ? val * 10 : val;
});

// remove any scores > 100
const removeHighScores = boostSingleScores.filter((val) => {
  return val <= 100;
});

const removeLowScores = removeHighScores.filter(function (val) {
  return val > 0;
});

// Sum the scores using reduce (fet. arrow function)
// the ", 0" initializes the value
const sumScores = removeLowScores.reduce((accumulator, val) => {
  return accumulator + val;
}, 0);

// Provide a count for the number of scores remaining using reduce
// the ", 0" initializes the value
const scoreCount = removeLowScores.reduce(function (cnt) {
  return cnt + 1;
}, 0);

console.log("boostSingleScores:", boostSingleScores);
console.log("removeHighScores:", removeHighScores);
console.log("removeLowScores:", removeLowScores);
console.log("sumScores:", sumScores);
console.log("scoreCount:", scoreCount);
