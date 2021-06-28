var currentUser = 0,
  users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 },
  ];

var userStack = [users];

// This is going to be the one impure function:
const updateUsers = ({ name = 0, score = 0, tries = 0 }) => {
  //console.log("rest:", rest);
  //console.log("tos", typeof score, "tot", typeof tries);
  //console.log("name:", name);
  //console.log("score:", score);
  //console.log("tries:", tries);
  //console.log("users[name]:", users);

  if (name === 0) {
    // doesn't work without a name
    return false;
  }
  let itemToChange = users.find((item) => item.name === name);
  let itemIndex = users.indexOf(itemToChange);
  if (score !== 0) {
    itemToChange.score = score;
  }
  if (tries !== 0) {
    itemToChange.tries = tries;
  }

  users[itemIndex] = itemToChange;
};

// FROM https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
// const getKeyByValue = (object, value) => {
//   return Object.keys(object).find((key) => object[key] === value);
// };

/**
 * USAGE
 *   const map = {"first" : "1", "second" : "2"};
 
*  console.log(getKeyByValue(map,"2"));
 */

var updateScore = function (name, newAmt) {
  return users[name].score + newAmt;
};

// Not pure
var updateTries = function () {
  return users[currentUser].tries + 1;
};

// Not pure
// var updateUser = function (newUser) {
//   currentUser = newUser;
// };

// console.log(returnUsers());
// updateScore(20);
// console.log(returnUsers());

/**
 * INSTRUCTOR NOTES:
 * This of a function as receiving data and returning data.
 * What happens inside that function only acts on what is received,
 * Does not modify anything outside the function.
 * May need a function that updates the array.
 */

// TESTS
updateUsers({ name: "Mary", score: 20, tries: 8 });
//updateUsers({ name: "Henry", tries: 5 });
//updateUsers({ score: 11, tries: 1 });
console.log(users);
//console.log(users.find((x) => x.name === "James"));
//console.log(users.indexOf(users.find((item) => item.name === "Henry")));
updateUsers({ name: "Henry", tries: 123 });
console.log(users);
