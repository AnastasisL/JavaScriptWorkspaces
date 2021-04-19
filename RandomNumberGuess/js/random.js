
let usersNumber = prompt("Please provid a low number.");
let usersNumber2 = prompt("Please provid high number.");


usersNumber = parseInt(usersNumber);
usersNumber2 = parseInt(usersNumber2);


if (usersNumber && usersNumber2) {
  let generatedNumber = Math.floor(Math.random(usersNumber) * usersNumber2) + 1;

  alert(`${generatedNumber} is a number between ${usersNumber} and ${usersNumber2}.`)
} else {
  alert("You need to provide a number. Try again.");
}

