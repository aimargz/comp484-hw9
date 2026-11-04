// Format the current date as MM/DD/YYYY.
const currentDate = new Date();
const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
const currentDay = String(currentDate.getDate()).padStart(2, "0");
const currentYear = currentDate.getFullYear();
const dateMessage = "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;

document.getElementById("dateOutput").textContent = dateMessage;

// Convert and check four string values.
const wholeNumberText = "64";
const decimalText = "12.5";
const wordText = "campus";
const negativeNumberText = "-8";

const wholeNumber = Number(wholeNumberText);
const decimalNumber = Number(decimalText);
const wordNumber = Number(wordText);
const negativeNumber = Number(negativeNumberText);

const wholeNumberIsNaN = Number.isNaN(wholeNumber);
const wholeNumberIsInteger = Number.isInteger(wholeNumber);
const decimalIsNaN = Number.isNaN(decimalNumber);
const decimalIsInteger = Number.isInteger(decimalNumber);
const wordIsNaN = Number.isNaN(wordNumber);
const wordIsInteger = Number.isInteger(wordNumber);
const negativeNumberIsNaN = Number.isNaN(negativeNumber);
const negativeNumberIsInteger = Number.isInteger(negativeNumber);

const wholeNumberRow = "<tr><th scope='row'><code>&quot;" + wholeNumberText + "&quot;</code></th><td>" + wholeNumber + "</td><td>" + wholeNumberIsNaN + "</td><td>" + wholeNumberIsInteger + "</td></tr>";
const decimalRow = "<tr><th scope='row'><code>&quot;" + decimalText + "&quot;</code></th><td>" + decimalNumber + "</td><td>" + decimalIsNaN + "</td><td>" + decimalIsInteger + "</td></tr>";
const wordRow = "<tr><th scope='row'><code>&quot;" + wordText + "&quot;</code></th><td>" + wordNumber + "</td><td>" + wordIsNaN + "</td><td>" + wordIsInteger + "</td></tr>";
const negativeNumberRow = "<tr><th scope='row'><code>&quot;" + negativeNumberText + "&quot;</code></th><td>" + negativeNumber + "</td><td>" + negativeNumberIsNaN + "</td><td>" + negativeNumberIsInteger + "</td></tr>";
const conversionResults = wholeNumberRow + decimalRow + wordRow + negativeNumberRow;

document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// Display messages based on the number checks.
let wordMessage;

if (wordIsNaN) {
  wordMessage = '"' + wordText + '" is not a valid number.';
} else {
  wordMessage = '"' + wordText + '" converts to a valid number.';
}

let decimalMessage;

if (decimalIsInteger) {
  decimalMessage = decimalNumber + " is an integer.";
} else {
  decimalMessage = decimalNumber + " is not an integer.";
}

document.getElementById("validationOutput").innerHTML = "<p>" + wordMessage + "</p><p>" + decimalMessage + "</p>";

// Calculate the total and average quiz scores.
const firstQuizScore = 88;
const secondQuizScore = 94;
const thirdQuizScore = 79;
const totalScore = firstQuizScore + secondQuizScore + thirdQuizScore;
const averageScore = totalScore / 3;
const formattedAverage = averageScore.toFixed(2);

// Check whether the average is passing.
let gradeMessage;

if (averageScore >= 70) {
  gradeMessage = "Passing: the average is 70 or higher.";
} else {
  gradeMessage = "Not passing: the average is below 70.";
}

const mathResults =
  "<dl class='math-grid'>" +
  "<div><dt>Quiz scores</dt><dd>" + firstQuizScore + ", " + secondQuizScore + ", " + thirdQuizScore + "</dd></div>" +
  "<div><dt>Total score</dt><dd>" + totalScore + " / 300</dd></div>" +
  "<div><dt>Average score</dt><dd class='average-score'>" + formattedAverage + "<span> / 100</span></dd></div>" +
  "</dl>" +
  "<p class='calculation'>" + firstQuizScore + " + " + secondQuizScore + " + " + thirdQuizScore + " = " + totalScore + "; " + totalScore + " / 3 = " + formattedAverage + "</p>" +
  "<p class='grade-message'>" + gradeMessage + "</p>";

document.getElementById("mathOutput").innerHTML = mathResults;
