// task 1
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
    this.getSummary = () => {
      return `${this.title} was written by ${this.author} in ${this.year}`;
    };
  }
  
  const bookFirst = new Book("Jane eyre", "Charlotte Bronte", 1847);
  console.log(bookFirst);
  
  const bookSecond = new Book("The Alchemist", "Paulo Coelho", 1988);
  console.log(bookSecond);
  
  console.log(bookFirst.getSummary());
  console.log(bookSecond.getSummary());
  
  const bookThird = Book("Pride and Prejudice", "Jane Austen", 1813);
  console.log(bookThird);
  
  // task 2
  function Student (name, grade){
      this.name = name;
      this.grade = grade;
  
      this.study=() =>{
          console.log(`This student is in ${this.grade}th grade`);
      }
  }
  
  const student = new Student("Aidan", 8)
  console.log(student);
  student.study()