const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

const cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

var newScore = function (arr, name, amt) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt;
    }
  });
  return arr;
};

var newTries = function (arr, name) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++;
    }
  });
  return arr;
};

// Make changes so that you get a new array.
var newArray1 = newScore(cloneObj(users), "Henry", 30);
var newArray2 = newTries(cloneObj(users), "Henry");

console.log(`users: ${JSON.stringify(users)}`);
console.log("newArray1:", newArray1);
console.log("newArray2:", newArray2);
console.log(`users: ${JSON.stringify(users)}`);
