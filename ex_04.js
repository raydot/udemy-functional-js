const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

// Part 1: do this with map() and return new array
//Modifies Data
// var storeUser = function (arr, user) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
//       arr[i] = user;
//       break;
//     }
//   }
// };
const storeUser = function(arr, user) {
  return arr.map(item => item.name.toLowerCase() === user.name.toLowerCase() ? user : item);
}


//Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

// Part 2: do this with reduce
// const getUser = function (arr, name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name.toLowerCase() === name.toLowerCase()) {
//       return arr[i];
//     }
//   }
//   return null;
// };
const getUser = function (arr, name) {
  return arr.reduce((acc, item) => {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return item;
    }
    return acc;
  }, null);
}

const updateScore = function (user, newAmt) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

const updateTries = function (user) {
  if (user) {
    user.tries++;
    return user;
  }
};

console.log("starting array: ", users);
const usr = getUser(users, "Henry");
const usr1 = updateScore(cloneObj(usr), 30);
const usr2 = updateTries(cloneObj(usr1));
//storeUser(users, usr2);
const newUsers = storeUser(users, usr2);
console.log("new array: ", newUsers);