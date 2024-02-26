// task 1
const car = {
  brand: "Porsche",
  model: "918 Spyder",
  year: 2015,
};

// task 2
console.log(car.year);

// task 3
car.year = 2019;
console.log(car.year);

// task 4
car.color = "black";
console.log(car.color);

// task 5
delete car.model;
console.log(car);

// task 6
car.displayInfo = function () {
  console.log(car);
};

console.log(car.displayInfo());

// task 7
const person = {
  name: "Lee",
  address: {
    street: "Broadway",
    city: "New-York",
  },
};

// task 8
objectFirst = {
  color: "blue",
  quantity: 3,
};

objectSecond = {
  color: "blue",
  quantity: 3,
};

function compareObjects(objectFirst, objectSecond) {
  if (objectFirst === objectSecond) {
    return true;
  } else {
    return;
  }
}

console.log(compareObjects());

// task 9
let newProp = "power";
car[newProp] = 887;
console.log(car.power);

// task 10
const copyObj = Object.assign(car);

console.log(copyObj);

// extra task 1
creatStudent = function (name, age) {
  return (student = {
    name: name,
    age: age,
  });
};
console.log(creatStudent("Asan", 18));

// task 2
changeAge = function (age) {
  return (student.age = age);
};

console.log(changeAge(20));
