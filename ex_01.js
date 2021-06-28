var currentUser = 0,
  users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 },
  ];

var userStack = [users];

// This is going to be the one impure function:
const updateUsers = (name, score = 0, tries = 0) => {
  //console.log("rest:", rest);
  //console.log("tos", typeof score, "tot", typeof tries);
  console.log(score);
  console.log(tries);
  if (!score === 0) {
    console.log("Score:");
    console.log(getKeyByValue(users, name));
  }
  if (!tries === 0) {
    console.log("Tries:");
    console.log(getKeyByValue(users, name));
  }
};

// FROM https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

/**
 * USAGE
 *   const map = {"first" : "1", "second" : "2"};
 
*  console.log(getKeyByValue(map,"2"));
 */

// Not pure, has side effects.
var updateScore = function (name, newAmt) {
  // users[currentUser].score += newAmt;
  return users[name].score + newAmt;
};

// Not necessary now what we're not using namespace pattern
// var returnUsers = function () {
//   return users;
// };

// Not pure
var updateTries = function () {
  return users[currentUser].tries + 1;
  // users[currentUser].trues++;
};

// Not pure
var updateUser = function (newUser) {
  currentUser = newUser;
};

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
updateUsers("James", { score: 20 });
updateUsers("Henry", { tries: 1 });
