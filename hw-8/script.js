// task 1
const myElement = document.querySelector(".js-btn");

checkTheClass = () => {
  if (myElement.classList.contains("active")) {
    console.log(`There is no "js-btn" class`);
  } else {
    console.log(`There is "js-btn" class`);
  }
};

myElement.addEventListener("click", checkTheClass);

// task 2
const taskSecondBtn = document.querySelector(".task-2-btn");

changeBtn = () => {
  if (taskSecondBtn.innerText === "ON") {
    taskSecondBtn.innerHTML = "OFF";
    taskSecondBtn.style.backgroundColor = "red";
  } else {
    taskSecondBtn.innerHTML = "ON";
    taskSecondBtn.style.backgroundColor = "green";
  }
};

taskSecondBtn.addEventListener("click", changeBtn);

// task 3
const inputValue = document.querySelector("#inputText");
const submit = document.querySelector("#submit");
const resultText = document.querySelector("#result");

const showInputValue = () => {
  const value = inputValue.value.trim();
  resultText.innerHTML = value
};

submit.addEventListener("click", showInputValue);


// task 5
const secondInputValue = document.querySelector("#task-5-input")
const secondResultText = document.querySelector("#task-5-result")

secondInputValue.addEventListener("input", () => {
  secondResultText.innerText = event.target.value
})

// task 6


const resultTaskSixth = document.querySelector("#result-task-6")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const plus = document.querySelector("#plus")

const showNumbers = (number) => {
localStorage.setItem("numbers", resultTaskSixth.textContent)
  resultTaskSixth.innerText += number ;
}

resultTaskSixth.innerText = localStorage.getItem("numbers") 