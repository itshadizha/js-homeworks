// task 1
let a = 6;

if (a === 10) {
  console.log(`верно`);
} else {
  console.log(`не верно`);
}

// task 2
let promptBaatir = prompt("Номер квартиры");
let baatir = promptBaatir;

if (baatir >= 1 && baatir <= 20) {
  console.log(`Ваша квартира ${baatir} в первом подьезде`);
} else if (baatir >= 21 && baatir <= 48) {
  console.log(`Ваша квартира ${baatir} во втором подьезде`);
} else if (baatir >= 49 && baatir <= 90) {
  console.log(`Ваша квартира ${baatir} в третьем подьезде`);
}

// 3 task
let thirdNum = null;
if (thirdNum > 0 && thirdNum < 5) {
  console.log(`верно`);
} else {
  console.log(`неверно`);
}

// task 4

const hour = 0;

if (hour >= 6 && hour <= 12) {
  console.log("Доброе утро!");
} else if (hour >= 13 && hour <= 17) {
  console.log(`Добрый день!`);
} else {
  console.log(`Добрый вечер!`);
}

// task 5

const name = "Nursultan";

console.log(`Good luck ${name}!`);

// task 6
let age = 6;
if (age < 6 || age >= 65) {
  console.log(`discount`);
} else {
  console.log(`no discount`);
}

// task 7
const coin = Math.random();

if (coin <= 0.5) {
  console.log(`орел`);
} else {
  console.log(`решка`);
}

// task 9

let n = 5 === 5 ? `five` : `not five`;
