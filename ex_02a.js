const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

// Modifies Data
var storeUser = function (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[i] = user;
      break;
    }
  }
};

// Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

var getUser = function (arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === name.toLowerCase()) {
      return arr[i];
    }
  }
  return null;
};

var updateScore = function (user, newAmt) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

var updateTries = function (user) {
  if (user) {
    user.tries++;
    return user;
  }
};

// Each of the users shows the modification, but are referencing the same object.
let usr = getUser(users, "Henry");
console.log("usr:", usr, "\n");

let usr1 = updateScore(cloneObj(usr), 30);
console.log("usr:", usr);
console.log("usr1:", usr1, "\n");

let usr2 = updateTries(cloneObj(usr1));
console.log("usr:", usr);
console.log("usr1:", usr1);
console.log("usr2:", usr2, "\n");

storeUser(users, usr2);
console.log("usr:", users);
