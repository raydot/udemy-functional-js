var currentUser = 0,
  users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 },
  ];

var userStack = [users];

// Not pure, has side effects.
var updateScore = function (newAmt) {
  users[currentUser].score += newAmt;
};

// Not necessary now what we're not using namespace pattern
var returnUsers = function () {
  return users;
};

// Not pure
var updateTries = function () {
  users[currentUser].trues++;
};

// Not pure
var updateUser = function (newUser) {
  currentUser = newUser;
};

console.log(returnUsers());
updateScore(20);
console.log(returnUsers());

/**
 * This of a function as receiving data and returning data.
 * What happens inside that function only acts on what is received,
 * Does not modify anything outside the function.
 * May need a function that updates the array.
 */
