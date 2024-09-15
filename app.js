/* // Challenge - 1

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
console.log(message); */

/* Chapter1.pdf */

/* 1. Write a script to greet your website visitor using JS alert box
let userName = prompt("Hi, what is your name?");

alert("Greetings, " + userName); */

/* 2.Invalid password

let userPassword = +prompt("Enter your password.");

if (userPassword === 211167) {
  alert("Hurrah, your password has matched.");
} else {
  alert("Error, please enter a correct password.");
} */

/* 3. Use line break

alert("Welcome to JS Land. \nHappy Coding!"); */

/* 4. Sequence of messages
alert("Welcome to JS Land.");
alert("Happy Coding!"); */

/* Chapter2.pdf */
/* let userName;
let myName = "Daniyal Alam";

let message;
message = "Hello World";
alert(message);

let studentName = "Hammad Alam";
let studentAge = "20 Years Old.";
let studentDomain = "Certified MERN Stack Developer";

alert(studentName);
alert(studentAge);
alert(studentDomain); */

/* let pizzaVar = "PIZZA \nPIZZ \nPIZ \nPI \nP";

alert(pizzaVar); */

/* // Email

let email = "daniyal.alam45@gmail.com";

alert("My email address is " + email); */

/* // Book
let book = "A smarter way to learn JavaScript";

alert(`I am trying to learn from the book ${book}`); */

// document.write("Yah, I can write HTML content through JS.");

/* // Show special string
var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

document.write(myString);

alert(myString); */

/* Chapter: 6 to 9 */
/* let a = 10;
document.write("Result: \nThe value of a is: " + a);
document.write("<br>********************************");
a = ++a;
document.write("<br>The value of ++a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");

document.write("<br>The value of a++ is: " + a);
a++;
document.write("<br>Now the value of a is: " + a);
document.write("<br>");

--a;
document.write("<br>The value of --a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");

document.write("<br>The value of a-- is: " + a);
a--;
document.write("<br>Now the value of a is: " + a); */

//2.

/* var a = 2;
var b = 1;
var result = --a - --b + ++b + b--; //1 - 0 + 1 + 1 = 3
console.log(a, b, result); */

/* //3.
let userName = prompt("Enter your name: ");
alert("Greetings, " + userName); */

/* // 4. table of a number
var userInput = +prompt(
  "Enter the number of which you want multiplication",
  "5"
);
document.write(`${userInput} *  1 = ${userInput * 1}<br>`);
document.write(`${userInput} *  2 = ${userInput * 2}<br>`);
document.write(`${userInput} *  3 = ${userInput * 3}<br>`);
document.write(`${userInput} *  4 = ${userInput * 4}<br>`);
document.write(`${userInput} *  5 = ${userInput * 5}<br>`);
document.write(`${userInput} *  6 = ${userInput * 6}<br>`);
document.write(`${userInput} *  7 = ${userInput * 7}<br>`);
document.write(`${userInput} *  8 = ${userInput * 8}<br>`);
document.write(`${userInput} *  9 = ${userInput * 9}<br>`);
document.write(`${userInput} * 10 = ${userInput * 10}<br>`); */

/* //6.

var subjectOne, subjectTwo, subjectThree;

subjectOne = prompt("Enter subject one name: ");
subjectTwo = prompt("Enter subject two name: ");
subjectThree = prompt("Enter subject three name: ");

var totalMarksPerSubject = 100;

var obtainedMarksSubjectOne, obtainedMarksSubjectTwo, obtainedMarksSubjectThree;

obtainedMarksSubjectOne = +prompt("Enter obtained marks of " + subjectOne);
obtainedMarksSubjectTwo = +prompt("Enter obtained marks of " + subjectTwo);
obtainedMarksSubjectThree = +prompt("Enter obtained marks of " + subjectThree);

var totalObtainedMarks =
  obtainedMarksSubjectOne + obtainedMarksSubjectTwo + obtainedMarksSubjectThree;

var percentage = (totalObtainedMarks / (totalMarksPerSubject * 3)) * 100;

document.write(`You got ${totalObtainedMarks} marks with ${percentage}%.`); */

// Chapter 3.pdf
/* // 1.
var age = 23;
alert("I am " + age + " year old."); */

/* // 2. number of visits
let visitCountNo = localStorage.getItem("visitCountNo");

if (visitCountNo === null) {
  visitCountNo = 0;
}

visitCountNo++;

localStorage.setItem("visitCountNo", visitCountNo);

alert(`You have visited this site ${visitCountNo} times.`); */

/* // 3. birthyear

let birthYear = 2001;

document.write(`My birth year is ${birthYear}<br>`);
document.write(
  `Data type of declared variable birthYear is ${typeof birthYear}`
); */

/* // 4. Online store

let visitorName = prompt("Hi, enter your name: ");
let productTitle = prompt("Enter product name you purchased: ");
let productQuantity = +prompt(
  "How much quantity you want to purchase of " + productTitle
);

let message = `${visitorName} ordered ${productQuantity} ${productTitle} from White House Closet.`;

document.write(message); */

/* Chapter 9=11 */

/* // 1. welcome to city

let cityName = prompt("Enter your city, where you live?");

if (cityName === "Karachi") {
  alert("Welcome to the city of lights, " + cityName);
} */

/* // 2. Gender
let gender = prompt("Enter your gender.");
if (gender === "male") {
  alert("Good Morning Sir!");
} else {
  alert("Good Morning Madam!");
}
 */

/* // 3. signal
let colorOfTrafficSignal = prompt(
  "What color is now on traffic signal, let me know."
);

if (colorOfTrafficSignal === "red") {
  alert("Must stop, don't move, this may cause risk.");
} else if (colorOfTrafficSignal === "yellow") {
  alert("Hold on, but be ready to move.");
} else if (colorOfTrafficSignal === "green") {
  alert("Hey, move now otherwise you have to wait 2 minutes more:)");
} else alert("Invalid input signal!"); */

/* // 4. fuel
let remainingFuel = +prompt("Tell me your car fuel in litres?");

if (remainingFuel < 0.25) {
  alert("Hurry up, refill the fuel tank in your car.");
} */

// 5. outputs
// a.
/* var a = 4;
if (++a === 5) {
  alert("Given condition for a is true"); //true
} */

/* // b.
var b = 82;
if (b++ === 83) {
  alert("Given condition for b is true"); //false
} */

/* // c.
var c = 12;
if (c++ === 13) {
  alert("Given condition 1 is true"); //false
}
if (c === 13) {
  alert("Given condition 2 is true"); //true
}
if (++c < 14) {
  alert("Given condition 3 is true"); //false
}
if (c === 14) {
  alert("Given condition 4 is true"); //true
} */

/* // d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === materialCost + laborCost) {
  alert("The cost is equal.");
} */

/* // e.
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
 */

/* // f.
if ("car" < "cat") {
  alert("Car is less than Cat!"); //The code compares the strings `"car"` and `"cat"` lexicographically (based on the alphabetical order of characters), and since `"r"` comes before `"t"`, the condition is true, so it triggers the `alert` saying "Car is less than Cat!"
} */

/* // 6. Marksheet
let physics,
  chemistry,
  english,
  totalMarks,
  marksObtained,
  percentage,
  grade,
  remarks;

totalMarks = +prompt("Enter total marks of subjects");
physics = Number(window.prompt("Please enter your marks in Physics"));
chemistry = Number(window.prompt("Please enter your marks in Chemistry"));
english = Number(window.prompt("Please enter your marks in English"));

marksObtained = physics + chemistry + english;
percentage = (marksObtained / totalMarks) * 100;

document.write("<br>Marks in Physics :" + physics);
document.write("<br>Marks in Chemistry :" + chemistry);
document.write("<br>Marks in English :" + english);
document.write("<br>Total Marks :" + totalMarks);
document.write("<br>Marks Obtained :" + marksObtained);
document.write("<br>Percentage :" + percentage);
switch (true) {
  case percentage >= 80:
    grade = "A-One";
    remarks = "Excellent";
    break;
  case percentage >= 70:
    grade = "A";
    remarks = "Good";
    break;
  case percentage >= 60:
    grade = "B";
    remarks = "You need to improve";
    break;
  case percentage < 60:
    grade = "Fail";
    remarks = "Sorry";
    break;
  default:
    grade = "Not know";
    remarks = "No remarks";
    break;
}
document.write("<br>Grade :" + grade);
document.write("<br>Remarks :" + remarks); */

/* // 7. Guess Game
const secretNumber = 8;
var userGuess = Number(window.prompt("Guess the number(1 to 10):"));
if (secretNumber === userGuess) {
  alert("Bingo, correct answer.");
} else if (userGuess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, wrong guess. Try again!");
} */

/* // 8. Divisible by 3
var userInput = Number(prompt("Enter number:"));

if (userInput % 3 === 0) {
  alert(`${userInput} is divisible by 3.`);
} else {
  alert(`${userInput} is not divisible by 3.`);
} */

/* // 9. Even or Odd
var userInput = Number(prompt("Enter number:"));

if (userInput % 2 == 0) {
  alert(`${userInput} is even number.`);
} else {
  alert(`${userInput} is odd number.`);
} */

/* // 10. Temperature
var roomTemperature = Number(prompt("Enter room temperature:"));

if (roomTemperature > 40) {
  alert("It's too hot outside.");
} else if (roomTemperature > 30) {
  alert("The weather today is normal.");
} else if (roomTemperature > 20) {
  alert("Today's weather is cool.");
} else if (roomTemperature > 10) {
  alert("OMG! Today's weather is so cool.");
} else {
  alert("undefined.");
} */

/* // 11. Calculator
var firstNumber, secondNumber, operationPerform, result;

firstNumber = Number(prompt("Enter first number:"));
secondNumber = Number(prompt("Enter second number:"));
operationPerform = prompt(
  "Select the operation you want to perform: + | - | * | /"
);

if (operationPerform === "+") {
  result = firstNumber + secondNumber;
  document.write(`${firstNumber} + ${secondNumber} = ${result}`);
} else if (operationPerform === "-") {
  result = firstNumber - secondNumber;
  document.write(`${firstNumber} - ${secondNumber} = ${result}`);
} else if (operationPerform === "*") {
  result = firstNumber * secondNumber;
  document.write(`${firstNumber} * ${secondNumber} = ${result}`);
} else {
  result = firstNumber / secondNumber;
  document.write(`${firstNumber} / ${secondNumber} = ${result}`);
} */

// Chapter 12 and 13
/* // 1.
var userInput = window.prompt(
  "Enter any number, uppercase character or lowercase character to identify:"
);

if (userInput.charCodeAt(0) >= "97" && userInput.charCodeAt(0) <= "122") {
  alert("Entered character is lowercase.");
} else if (userInput.charCodeAt(0) >= "65" && userInput.charCodeAt(0) <= "90") {
  alert("Entered character is uppercase.");
} else if (userInput >= 0) {
  alert("Number is positive.");
} else {
  alert("Number is negative.");
} */

// 2.
/* var firstInt, secondInt;

firstInt = +prompt("Enter first number: ");
secondInt = +prompt("Enter second number: ");

if (firstInt === secondInt) {
  alert("Both are equal");
} else if (firstInt > secondInt) {
  alert("First number is greater than second number.");
} else {
  alert("Second number is greater.");
}
 */

/* // 4. vowel
var char = prompt("Enter character which should be of length 1: ");

if (char.toString().length == 1) {
  if (
    char.charCodeAt(0) == "65" ||
    char.charCodeAt(0) == "69" ||
    char.charCodeAt(0) == "73" ||
    char.charCodeAt(0) == "79" ||
    char.charCodeAt(0) == "85"
  ) {
    alert("Char is of length 1 and also it is vowel.");
  } else if (
    char.charCodeAt(0) == "97" ||
    char.charCodeAt(0) == "101" ||
    char.charCodeAt(0) == "105" ||
    char.charCodeAt(0) == "111" ||
    char.charCodeAt(0) == "117"
  ) {
    alert("Char is of length 1 and also it is vowel.");
  } else {
    alert("It is constant.");
  }
} else {
  alert("character should be of length 1.");
} */

/* // 5. Correct password
var correctPass = "nova123";
var userPass = prompt("Enter your password:");

if (userPass !== "") {
  if (userPass === correctPass) {
    alert("The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
} else {
  alert("Kindly enter your password.");
} */

// chapter 14 - 16
/* // Array
let studentNames = [];
let studentDomains = new Array();
var stringArrays = ["Karachi", "London", "Makkah", "Madina"];
var numberArrays = [4, 5, 6, 7, 8];
var booleanArrays = [true, false, true, false];
var mixedArray = [1, "Daniyal", true];
var educationQualificationsInPakistan = [
  "SSC",
  "HSC",
  "BS",
  "BCS",
  "BCOM",
  "MS",
  "PhD",
];

for (let index = 0; index < educationQualificationsInPakistan.length; index++) {
  document.write("<li>" + educationQualificationsInPakistan[index] + "</li>");
} */

/* // 8.
var studentNames = ["Daniyal", "Hammad", "Noor Alam"];
var studentScores = [320, 280, 390];
var studentPercentages = [
  (studentScores[0] / 500) * 100,
  (studentScores[1] / 500) * 100,
  (studentScores[2] / 500) * 100,
];

for (let index = 0; index < studentNames.length; index++) {
  document.write(
    `<li>Score of ${studentNames[index]} is ${studentScores[index]} and the percentage is ${studentPercentages[index]}</li>`
  );
}

var foo = [];
foo[100] = 85;
document.write(foo.length); */

/* // 9.
var colorNames = ["Violet", "Vue Green", "Swelte Orange", "Pink"];
document.write(colorNames + "=> color names array");

// ask the user to add the color in the beginning
var colorAddStart = prompt("What color you want to add in the start?");
colorNames.unshift(colorAddStart);
document.write("<br>");
document.write("color adding in the start using unshift:");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// ask the user to add the color in the end
var colorAddEnd = prompt("What color you want to add at the end?");
colorNames.push(colorAddEnd);
document.write("<br>");
document.write("color adding at the end using push:");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// add two more colors at the beginning
colorNames.unshift(colorAddStart, colorAddEnd);
document.write("<br>");
document.write("two color adding in the start using unshift:");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// Use the shift method to remove an element from the beginning of an array.
colorNames.shift();
document.write("<br>");
document.write("Deleting the first element in the array:");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// delete the last color in the array
colorNames.pop();
document.write("<br>");
document.write("Deleting the last element in the array:");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// ask the user at which index he wants to add color and color name
var askUserIndex = +prompt("At which index you want to add color?");
var askUserColor = prompt("Which color you want to add?");
document.write("<br>");
colorNames.splice(askUserIndex, 0, askUserColor);
document.write("Array after inserting at specific index");
document.write("<br>");
document.write(colorNames);
document.write("<br>");

// ask the user at which index he wants to delete color and and how many
var askUserIndex = +prompt("At which index you want to delete color?");
var askUserDelete = +prompt(
  "how many colors you want to delete from that index?"
);
document.write("<br>");
colorNames.splice(askUserIndex, askUserDelete);
document.write("Array after deleting from specific index");
document.write("<br>");
document.write(colorNames);
document.write("<br>"); */

/* // 10. sort
let studentScores = [320, 230, 130, 420, 10];
document.write(studentScores.sort() + " sorted array"); */

/* // 11. slice
var colorNames = ["Violet", "Vue Green", "Swelte Orange", "Pink"];
document.write(colorNames + "=> color names array");
document.write("<br>");
var newCopiedArray = colorNames.slice(1, 4);
document.write(
  newCopiedArray + "=> New color names array copied from previous array"
); */

/* var arrayJoining = ["Hi ", "I am ", "Doing ", "Array Assignment"];
document.write(arrayJoining.join() + " array after join");
 */

/* // 13.
var educationQualificationsInPakistan = [
  "SSC",
  "HSC",
  "BS",
  "BCS",
  "BCOM",
  "MS",
  "PhD",
];

for (let index = 0; index < educationQualificationsInPakistan.length; index++) {
  document.write(educationQualificationsInPakistan.slice(index, index + 1));
  document.write("<br>");
} */
