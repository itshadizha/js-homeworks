// task 1
function greet() {
  alert(`Hello!`);
}
greet();

// task 2
function plus(firstNum, secondNum) {
  let resultSecond = firstNum + secondNum;
  return resultSecond;
}
const total = plus(2, 7);
console.log(total);

// task 3
function exponentiate(number) {
  let resultThird = Math.pow(number, 2);
  return resultThird;
}

let solutionThird = exponentiate(5);
console.log(solutionThird);

// task 4
function greetUser(name) {
  alert(`Hello ${name}!`);
}
greetUser(`Hadizha`);

// task 5
function initTwoWords(firstWord, secondWord) {
  const resultFifth = firstWord + secondWord;
  return resultFifth;
}
const solutionFifth = initTwoWords(`hello`, `world`);
console.log(solutionFifth);

// task 6
function chekEvenNumber(numberSixth) {
  if (numberSixth % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}
chekEvenNumber(2);

// task 7
function determineBiggestNumber(param1, param2) {
  Math.max(param1, param2);
}
determineBiggestNumber(3, 9);

// task 8
function countLength(string) {
  const resultEighth = string.length;
  return resultEighth;
}
const functionEighth = countLength(`hello`);
console.log(functionEighth);

// task 9
function userInfo(name, age) {
  alert(`Hi, ${name} ! You are ${age}`);
}
userInfo(`Alina`, 17);

// task 10
function add(numberFirst, numberSecond) {
  let resultTen;
  if (numberFirst > 10 && numberSecond > 10) {
    resultTen = numberFirst + numberSecond;
  } else {
    resultTen = numberFirst - numberSecond;
  }
  return resultTen;
}

const resultTen = add(11, 12);
console.log(resultTen);

// task 11
function findTheEntrance(baatir) {
  if (baatir >= 1 && baatir <= 20) {
    console.log(`Ваша квартира ${baatir} в первом подьезде`);
  } else if (baatir >= 21 && baatir <= 48) {
    console.log(`Ваша квартира ${baatir} во втором подьезде`);
  } else if (baatir >= 49 && baatir <= 90) {
    console.log(`Ваша квартира ${baatir} в третьем подьезде`);
  }
}
findTheEntrance(33);

// Expression function

// task 1
const greetExp = function () {
  alert(`Hello!`);
};
greetExp();

// task 2
const plusExp = function (firstNum, secondNum) {
  let resultSecond = firstNum + secondNum;
  return resultSecond;
};
console.log(plusExp(2, 7));

// task 3
const exponentiateExp = function (number) {
  let resultThird = Math.pow(number, 2);
  return resultThird;
};
console.log(exponentiateExp(5));

// task 4
const greetUserExp = function (name) {
  alert(`Hello ${name}!`);
};
greetUserExp(`Hadizha`);

// task 5
const initTwoWordsExp = function (firstWord, secondWord) {
  const resultFifth = firstWord + secondWord;
  return resultFifth;
};
console.log(initTwoWordsExp(`hello`, `world`));

// task 6
const chekEvenNumberExp = function (numberSixth) {
  if (numberSixth % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
};
chekEvenNumberExp(2);

// task 7
const determineBiggestNumberExp = function (param1, param2) {
  Math.max(param1, param2);
};
determineBiggestNumberExp(3, 9);

// task 8
const countLengthExp = function (string) {
  const resultEighth = string.length;
  return resultEighth;
};
console.log(countLengthExp(`hello`));

// task 9
const userInfoExp = function (name, age) {
  alert(`Hi, ${name} ! You are ${age}`);
};
userInfoExp(`Alina`, 17);

// task 10
const addExp = function (numberFirst, numberSecond) {
  let resultTen;
  if (numberFirst > 10 && numberSecond > 10) {
    resultTen = numberFirst + numberSecond;
  } else {
    resultTen = numberFirst - numberSecond;
  }
  return resultTen;
};

console.log(addExp(11, 12));

// task 11
const findTheEntranceExp = function (baatir) {
  if (baatir >= 1 && baatir <= 20) {
    console.log(`Ваша квартира ${baatir} в первом подьезде`);
  } else if (baatir >= 21 && baatir <= 48) {
    console.log(`Ваша квартира ${baatir} во втором подьезде`);
  } else if (baatir >= 49 && baatir <= 90) {
    console.log(`Ваша квартира ${baatir} в третьем подьезде`);
  }
};
findTheEntranceExp(33);

// Arrow function
// task 1
const greetArrow = () => alert(`Hello!`);
greetArrow();

// task 2
const plusArrow = (firstNum, secondNum) => {
  let resultSecond = firstNum + secondNum;
  return resultSecond;
};
console.log(plusArrow(2, 7));

// task 3
const exponentiateArrow = (number) => {
  let resultThird = Math.pow(number, 2);
  return resultThird;
};
console.log(exponentiateArrow(5));

// task 4
const greetUserArrow = (name) => alert(`Hello ${name}!`);

greetUserArrow(`Hadizha`);

// task 5
const initTwoWordsArrow = (firstWord, secondWord) => {
  const resultFifth = firstWord + secondWord;
  return resultFifth;
};
console.log(initTwoWordsArrow(`hello`, `world`));

// task 6
const chekEvenNumberArrow = (numberSixth) => {
  if (numberSixth % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
};
chekEvenNumberArrow(2);

// task 7
const determineBiggestNumberArrow = (param1, param2) =>
  Math.max(param1, param2);

determineBiggestNumberArrow(3, 9);

// task 8
const countLengthArrow = (string) => {
  const resultEighth = string.length;
  return resultEighth;
};
console.log(countLengthArrow(`hello`));


// task 9
const userInfoArrow = (name, age) => alert(`Hi, ${name} ! You are ${age}`);

userInfoArrow(`Alina`, 17);

// task 10
const addArrow = (numberFirst, numberSecond) => {
  let resultTen;
  if (numberFirst > 10 && numberSecond > 10) {
    resultTen = numberFirst + numberSecond;
  } else {
    resultTen = numberFirst - numberSecond;
  }
  return resultTen;
};

console.log(addArrow(11, 12));

// task 11
const findTheEntranceArrow = (baatir) => {
  if (baatir >= 1 && baatir <= 20) {
    console.log(`Ваша квартира ${baatir} в первом подьезде`);
  } else if (baatir >= 21 && baatir <= 48) {
    console.log(`Ваша квартира ${baatir} во втором подьезде`);
  } else if (baatir >= 49 && baatir <= 90) {
    console.log(`Ваша квартира ${baatir} в третьем подьезде`);
  }
};
findTheEntranceArrow(33);