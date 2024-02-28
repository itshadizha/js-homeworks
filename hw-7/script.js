// const totalResult = JSON.parse(localStorage.getItem("Total")) || {
//     lose: 0,
//     win: 0,
//     nichya: 0,
//   };

//   const resultP = document.querySelector(".result");

//   function playGame(params) {
//     const computerMove = computerSelect();

//     let result = "";
//     if (params === "Кайчы") {
//       console.log("Кайчы");
//       if (computerMove === "Кайчы") {
//         result = "ТЕН";
//       } else if (params === "Кудук") {
//         result = "Женилуу";
//       } else if (params === "Кагаз") {
//         result = "Утуш";
//       }
//     }

//     if (params === "Кудук") {
//       console.log("Кудук");
//       if (computerMove === "Кайчы") {
//         result = "Утуш";
//       } else if (params === "Кудук") {
//         result = "Тен";
//       } else if (params === "Кагаз") {
//         result = "Женилуу";
//       }
//     }

//     if (params === "Кагаз") {
//       console.log("Кагаз");
//       if (computerMove === "Кайчы") {
//         result = "Женилуу";
//       } else if (params === "Кудук") {
//         result = "Утуш";
//       } else if (params === "Кагаз") {
//         result = "Тен";
//       }
//     }
//   }

//   if (result === "Утуш") {
//     totalResult.win = totalResult.win + 1;
//   }

//   if (result === "Женилуу") {
//     totalResult.lose = totalResult.lose + 1;
//   }

//   if (result === "Тен") {
//     totalResult.nichya = totalResult.nichya + 1;
//   }

//   showResultFromLocalS();

//   resultP.innerHTML = `Result: <span style='color: red'> ${result} </span>`;
//   document.querySelector(
//     "moves"
//   ).innerHTML = `You: ${params} --- Computer ${computerMove}`;
//   localStorage.setItem("total", JSON.stringify(totalResult));

//   function computerSelect() {
//     const randomNumber = Math.random();

//     let result = " ";
//     if (randomNumber >= 0 && randomNumber < 1 / 3) {
//       result = "Кудук";
//     } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//       result = "Кайчы";
//     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//       result = "Кагаз";
//     }
//     return result;
//   }

//   function showResultFromLocalS() {
//     document.querySelector(
//       "js-total"
//     ).innerHTML = `Результат win: ${totalResult.win}, lose: ${totalResult.lose}, nichya: ${totalResult.nichya}`;
//   }

// task 1

const item = {
    type: "basketball",
    price: 2095,
  };
  
  console.log(item);
  
  item.price = item.price + 500;
  
  console.log(item);
  
  item["delivery-time"] = `${3} days`;
  
  console.log(item);
  
  const comparePrice = (product1, product2) => {
    if (product1.price <= product2.price) {
      return product1.price;
    } else {
      return product2.price;
    }
  };
  
  const product1 = {
    name: "basketball",
    price: 2095,
  };
  
  const product2 = {
    name: "sock",
    price: 1090,
  };
  console.log(comparePrice(product1, product2));
  
  isSameProduct = (product1, product2) => {
    if (product1.price === product2.price && product1.name === product2.name) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isSameProduct(product1, product2));
  
  // task 5
  
  console.log(`Good Morning`.toLowerCase());
  
  console.log("TESTING".toLowerCase());
  
  // task 6
  const greet = "hello";
  console.log(greet.repeat(2));
  
  console.log("test".repeat(3));
  
  // task 7
  const buttonNine = document.querySelector("button");
  
  console.log(buttonNine);
  
  // task 8
  document.querySelector(".js-button").innerHTML = "Hello World";
  console.log((document.querySelector(".js-button").innerHTML = "Hello World"));
  
  // task 9
  
  const resultFortuneP = document.querySelector(".resultFortune");
  
  showOrel = () => {
    resultFortuneP.innerHTML = `Сиздин тандоонуз: Орел`;
  };
  
  showReshka = () => {
    resultFortuneP.innerHTML = `Сиздин тандоонуз: Решка `;
  };
  
  // task 11
  localStorage.setItem("myPhoneNumber", "0773371617");
  localStorage.getItem("myPhoneNumber");
  console.log(localStorage.getItem("myPhoneNumber"));
  
  localStorage.setItem("myName", "Hadizha");
  localStorage.getItem("myName");
  console.log(localStorage.getItem("myName"));
  
  localStorage.setItem("product1", JSON.stringify(product1));
  localStorage.getItem("product1");
  console.log(JSON.parse(localStorage.getItem("product1")));
  
  const person = {
    name: "Nursultan",
    surname: "Kenzhebaev",
    id: 899,
  };
  
  localStorage.setItem("person", JSON.stringify(person));
  JSON.parse(localStorage.getItem("person"));
  document.write(JSON.stringify(person));
  