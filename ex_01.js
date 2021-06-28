var currentUser = 0,
  users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 },
  ];

var userStack = [users];

var updateScore = function (newAmt) {
  users[currentUser].score += newAmt;
};

var returnUsers = function () {
  return users;
};

var updateTries = function () {
  users[currentUser].trues++;
};

var updateUser = function (newUser) {
  currentUser = newUser;
};

console.log(returnUsers());
updateScore(20);
console.log(returnUsers());
