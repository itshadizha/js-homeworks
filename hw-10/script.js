// task 0
const user = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};

const { id, first_name, last_name, email, gender, ip_address, isAdmin } = user;

// task 0
const animals = ["apple", "banana", "lemon", "kiwi", true];

const [apple, banana, lemon, kiwi, lastItem] = animals;

// task 0
const workers = [
  {
    id2: 1,
    name2: "Emile",
    lastname2: "Van Weedenburg",
    email2: "evanweedenburg0@technorati.com",
  },
  {
    id3: 2,
    name3: "Orv",
    lastname3: "Gretton",
    email3: "ogretton1@about.me",
  },
];

const [firstObj, secondObj] = workers;
const { id2, name2, lastname2, email2 } = firstObj;

// task 1
const add = function () {
  console.log(2 + 3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(function () {
  console.log("runTwice");
});

// task 2
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  Load();
  setTimeout(() => {
    finish();
  }, 2000);
});

function Load() {
  startBtn.innerHTML = "Loading";
}

function finish() {
  startBtn.innerHTML = "Finished";
}

// task 3
const cartBtn = document.querySelector(".cart-btn");
const result = document.querySelector(".added");

cartBtn.addEventListener("click", () => {
  result.innerHTML = "Added";
  setTimeout(() => {
    result.innerHTML = " ";
  }, 2000);
});

// task 4

function updateTitle() {
  document.title = "New messages";
}

setInterval(updateTitle, 5000);

// task 5
const computers = [
  {
    title: "Macbook Air",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus Zenbook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "Mackbook Pro",
    price: 100000,
  },
];

let total = 0;

for (const item of computers) {
  total = total + item.price;
}
console.log(total);
