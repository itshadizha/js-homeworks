// task 1
for (i = 1; i <= 100; i++) {
    console.log(i);
  }
  
  // task 2
  for (n = 0; n <= 100; n += 2) {
    console.log(n);
  }
  
  // task 3
  let total = 0;
  for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      total = total + i;
    }
  }
  console.log(total);
  
  // task 4
  let nums = [10, 20, 30];
  const newElement = 99;
  nums[2] = newElement;
  console.log(nums);
  
  // task 5
  const arrayFive = [2, 6, 8, 0]
  const getLastValue = (array) => {
   let lastElement = array[array.length - 1];
   return lastElement
  }
  console.log(getLastValue(arrayFive));
  
  // task 6
  for (i=5; i >= 0; i--) {
      console.log(i);
  }
  
  // task 7
  let m = 1;
  while (m <= 100) {
    console.log(m);
    m++;
  }
  
  // task 8
  let y = 0;
  while (y <= 100) {
    console.log(i);
    y += 2;
  }
  
  // task 9
  let arr = [1,2,3]
  const newArr = []
  for(i = 0; i< arr.length; i++) {
  newArr.push(arr[i] + 1)
  }
  console.log(newArr);
  
  // task 10
  const numbers = [1, 4, 9];
  const addNum = (array, num) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
  newArray.push(array[i] + num)
    }
    return newArray;
  };
  
  console.log(addNum(numbers, 5));
  
  // task 11
  const strings =['seek','search', 'look for']
  let index = strings.indexOf('search');
  
  if (strings.includes("search")) {
    console.log(index);
  } else {
  console.log(index);
  }
  
  // task 12
  let numberss = [2, -7, 4, 4];
  const countPositive = (nums) => {
    let positiveCount = 0;
    let negativeCount = 0;
    for (i = 0; i < nums.length; i++) {
      if (nums[i] > 0){
        positiveCount++;
      }
    }
    return positiveCount;
  };
  console.log(countPositive(numberss));
  
  // task 13
  let foods = ["egg", "apple", "egg", "ham"];
  const removeEgg = (foods) => {
    const updated = [];
    for (i = 0; i < foods.length; i++) {
      if (foods[i] === "egg") {
        continue;
      } else {
        updated.push(foods[i]);
      }
    }
    return updated;
  };
  
  console.log(removeEgg(foods));
  
  // task 14
  const findIndex = (array,word) => {
    let index = array.indexOf(word);
  
  if (array.includes(word)) {
    return index
  } else {
    return index
  }
  }
  
  const colors = ['green','red', 'purple', 'blue']
  console.log(findIndex(colors, 'purple'));
  
  // task 15
  const arrayFirst = [0, 2, 4];
  const arraySecond = [1, 3, 5];
  const addArrays = (array1, array2) => {
    const resultarray = [];
    for (i = 0; i < array1.length; i++) {
      console.log(array1[i] + array2[i]);
    }
  };
  
  addArrays(arrayFirst, arraySecond);
  
  // task 16
  const numbersMinMax = [2, -7, 3, -1];
  
  const minMax = (nums) => {
    let min = nums[0];
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
      if (nums[i] > max) {
        max = nums[i];
      }
    }
  
    return { min, max };
  };
  
  console.log(minMax(numbersMinMax));
  
  // task 17
  const fruits = ["apple", "grape", "apple", "grape", "strawberry"];
  const answer = {};
  const countWords = (words) => {
    for (let i = 0; i < words.length; i++) {
      if (answer[words[i]]) {
        answer[words[i]] += 1;
      } else {
        answer[words[i]] = 1;
      }
    }
    return answer;
  };
  
  console.log(countWords(fruits));