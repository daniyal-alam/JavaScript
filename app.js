// Challenge - 1

let firstName, lastName;

firstName = "Daniyal";
lastName = "Alam";

let address = "main street";
address = "first street";

console.log(
  `My name is ${firstName} ${lastName} and my address is ${address}.`
);

// Challenge - 2 => Concatenation
let street = "10th Street";
let country = "Pakistan";

let fullMailingAddress = `My full address is ${street} ${country}.`;

console.log(fullMailingAddress);

// Challenge - 3
let score1 = 75;
let score2 = 85;
let score3 = 95;

let totalScore = score1 + score2 + score3;
let average = totalScore / 3;

console.log(`My total score is ${totalScore} and average is ${average}.`);

let plates = 20;
let people = 7;

let remainingPlates = 20 % 7;
remainingPlates++;

let message = "There are " + remainingPlates + " plates available.";
console.log(message);
