class Calculator {
    constructor() {
      this.result = null;
    }
    plus(a, b) {
      this.result = a + b;
      return this.getResult();
    }
    minus(a, b) {
      this.result = a - b;
      return this.getResult();
    }
    multiply(a, b) {
      this.result = a * b;
      return this.getResult();
    }
    divide(a, b) {
      this.result = a / b;
      return this.getResult();
    }
    exponentiate(a, b) {
      this.result = a ** b;
      return this.getResult();
    }
    getResult() {
      return this.result;
    }
    clear() {
      this.result = null;
    }
  }
  
  const calculator = new Calculator();
  console.log(calculator);
  
  console.log(calculator.plus(7, 8));
  console.log(calculator.minus(18, 3)); 
  console.log(calculator.multiply(4, 6)); 
  console.log(calculator.divide(25, 5)); 
  console.log(calculator.exponentiate(2, 4)); 
  
  console.log(calculator.getResult()); 
  
  calculator.clear();
  console.log(calculator.getResult()); 