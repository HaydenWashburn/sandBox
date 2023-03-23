"use strict";
let countTo;

class UserInputError extends Error {}

function takeUserInput() {
  try {
    countTo = parseInt(prompt("What is the count limit?"));

    if (!countTo) {
      throw new UserInputError("Not a valid number");
    }
  } catch (e) {
    if (e instanceof UserInputError) {
      alert(e.message);
      takeUserInput();
    } else {
      alert("An unexpected error occured");
    }
  }
}

takeUserInput();

for (let i = 0; i <= countTo; i++) {
  console.log(i);
}