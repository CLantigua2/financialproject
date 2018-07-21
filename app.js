let funds = document.getElementById("funds");
let monthlyIncome = document.getElementById("monthlyIncome");
let button = document.getElementById("button");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");
let annualIncome = document.getElementById("annualIncome");
let savings = document.getElementById('savings');

/*funds.addEventListener("focus", function () {
  funds.value = "";
});
funds.addEventListener("blur", function () {
  funds.value = "$00.00";
});

monthlyIncome.addEventListener("focus", function () {
  monthlyIncome.value = "";
});
monthlyIncome.addEventListener("blur", function () {
  monthlyIncome.value = "$00.00";
});*/

button.addEventListener("click", function () {
  let savedInput = parseInt(funds.value);

  // Decide how the user should eat today
  if (savedInput >= 25) {
    answer.innerHTML = "Take a date to a fancy restaurant";
  } else if (savedInput >= 15 && savedInput < 25) {
    answer.innerHTML = "Eat at the fancy restaurant by yourself";
  } else if (savedInput >= 10 && savedInput < 15) {
    answer.innerHTML = "Eat fast food";
  } else if (savedInput >= 5 && savedInput < 10) {
    answer.innerHTML = "Eat instant noodles";
  } else if (savedInput >= 1 && savedInput < 5) {
    answer.innerHTML = "Hit up the dollar menu";
  } else if (savedInput == 0) {
    answer.innerHTML = "You're completely broke";
  } else {
    answer.innerHTML = "this is not a number";
  }
  funds.value = "";
});


monthlyIncome.addEventListener("keyup", function () {
  let income = monthlyIncome.value;
  annualIncome.innerHTML = `$${income * 12}`;
  savings.innerHTML = `$${parseInt(income * 0.19)}`;
});

clear.addEventListener("click", function () {
  // Clear answer and start over
  answer.innerHTML = "";
  savings.innerHTML = "";
  income.value = "";
});