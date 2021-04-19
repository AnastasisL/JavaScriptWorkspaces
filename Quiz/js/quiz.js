
let correctAnswers = 0;
const question1 = "green";
const question2 = "blue";
const question3 = "yellow";
const question4 = "pink";
const question5 = "purple";

let score;

const response1 = prompt("What colour is grass?");
const response2 = prompt("What colour is the sky?");
const response3 = prompt("What colour is the sun?");
const response4 = prompt("What colour is a pig?");
const response5 = prompt("What colour is an octopus?");


if ( response1 === question1) {
  correctAnswers += 1;
}

if ( response2 === question2) {
  correctAnswers += 1;
}

if ( response3 === question3) {
  correctAnswers += 1;
}

if ( response4 === question4) {
  correctAnswers += 1;
}

if ( response5 === question5) {
  correctAnswers += 1;
}


console.log(correctAnswers);


if ( correctAnswers === 5 ) {
  score = "Gold" ;
} else if ( correctAnswers == 4 || correctAnswers == 3 ) {
  score = "Silver";
} else if ( correctAnswers == 1 || correctAnswers == 2 ) {
  score = "Bronze";
} else {
  score = "No crown";
}


document.querySelector('main').innerHTML = `<h1>You got ${correctAnswers} out of 5 questions correct</h1>

<h2>Crown earned: ${score}</h2>`





