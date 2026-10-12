//Task 3: Print "Hello" 5 Times Using do...while

/*let i = 1;

do {
    console.log("Hello");
    i++;
}\
 while (i <= 5);
 */

 //Task 4: Reverse Counting Using while
/*
 let i=30;
 while(i>=1){
    console.log(i);
    i--;
 }
 */

 //Task 5: Find First Number Divisible by 9
/*
 let i=1;
 while(i<=100){
    if(i%9===0){
        console.log(i);
        break;
         
    }
   i++;
 }
   */

 //Sprint4 module 1 (class Tasks)

 //1: Write a function square that accepts one number and returns its square (number multiplied by itself).
/*
 function calculateSquare(num){
    return num*num;
 }
 console.log(calculateSquare(10));
 */

 //2: Write a function isEven that takes a number and returns true if the number is even, otherwise false.
/*
 function isEven(num){
   return num%2===0;
 }
 console.log(isEven(6))
 */

 //3: How do you create a function that does not return any value but prints a message instead? Write an example.  
/*
 function greet() {
    console.log("Hello, welcome!");
}

greet();
*/


//HOME TASKS

//1: Write a function that returns the larger of two numbers passed as parameters.
/*
function isLarger(n1,n2){
    if(n1>n2){
        return n1;
    }else if(n2>n1){
        return n2;
    }
}
console.log(isLarger(9,3))
*/

//2: Write a function that returns the cube of a number.
/*
function calculateCube(num){
    return num*num*num;
}
console.log(calculateCube(7));

*/

//3: What will happen if you call a function that has no return statement?
/*
function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result);     //then it returns undefined
*/


//LOGIC BUILDING
//Write a JavaScript function named isPrime that takes a number as input and returns true if the number is a prime number, otherwise returns false.


/*
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
*/


/*Create three versions of a function called `calculateCompoundInterest` that calculates compound interest given the principal amount, annual interest rate, number of times interest applied per year, and number of years.

- First, write it as a **function declaration**.
- Then, write it as a **function expression**.
- Finally, write it as an **arrow function**.

Hint: Use compound interest formula
*/

//function declaration
/*
function calculateCompoundInterest(P, r, n, t) {
    return P * Math.pow(1 + r / n, n * t);
}
console.log(calculateCompoundInterest(10000,0.05,4,2));
*/

//function expression


/*
let calculateCompoundInterest = function(P, r, n, t) {
    return P * Math.pow(1 + r / n, n * t);
};
console.log(calculateCompoundInterest(10000,0.05,4,2));
*/
//3. Arrow Function

/*let calculateCompoundInterest = (P, r, n, t) => {
    return P * Math.pow(1 + r / n, n * t);
};
console.log(calculateCompoundInterest(10000,0.05,4,2)); */


//---------ARRAYS------------------

//Module2 
//HomeTask
// Task 3: Add a Vegetable to the Start

/* Create a new array called `vegetableList` with at least two vegetable names.
 Use the `unshift()` method to add another vegetable at the beginning and print
  the updated array.*/

  /*
let vegetable = ["potato", "eggplant", "broccoli", "cauliflower"];
vegetable.unshift("carrot");
console.log(vegetable);
*/

/*### Task 4: Modify an Array with Splice

- **Objective**: Using the `vegetableList` array, replace the second vegetable with a 
new vegetablw using the `splice()` method. Print the updated array to see the changes.*/

/*let vegetable= ["potato", "eggplant", "broccoli", "cauliflower"];
vegetable.splice(1,1,"carrot")
console.log(vegetable);
*/

//-------Module3--------

//HomeTasks
/*1.Create an array of five temperatures in Celsius. Use forEach() to convert each
 temperature to Fahrenheit and print the converted values.*/
/*
 let temperature=[56, 68, 79, 45, 34];
temperature.forEach(function(celsius) {
    let fahrenheit=(celsius * 9/5) + 32;
    console.log(fahrenheit);
});
/*

/*2.Objective: Create an array of numbers representing the ages of five friends. Use map()
 to create a new array that adds 5 years to each age and print the new array.*/
/*
let ages = [20, 21, 19, 22, 18];
let newAges = ages.map(function(age) {
    return age + 5;
});
console.log(newAges);
*/

/*Objective: Create an array of scores from a class of students. Use filter() to create a
 new array that contains scores that are 75 or above, and print the result.*/
/*
 let scores = [67, 98, 57, 87, 68, 88, 78, 90, 97, 85];
let passingScores = scores.filter(function(score) {
    if (score >= 75) {
        return true;
    }
});
console.log(passingScores);
*/

/*4.Objective: Create an array of expenses for a month. Use reduce() to calculate
 the total expenses and print it to the console.*/
/*
 let expenses = [500, 1200, 800, 1500, 300];
let total = expenses.reduce(function(sum, expense) {
    return sum + expense;
}, 0);
console.log(total);
*/

/*5.Objective: Create an array of words in a sentence. Use reduceRight() to create
 a new string that concatenates the words in reverse order and print it.*/
/*
let words = ["I", "am", "learning", "JavaScript"];
let reversedSentence = words.reduceRight(function(result, word) {
    return result + " " + word;
}, "");
console.log(reversedSentence);
*/

/*6.### Task 6: `some()`

- **Objective**: Create an array of ages of people attending an event. Use `some()`
 to check if there is anyone who is under 18 years old and print the result.*/
/*
 let ages=[24,20,17,16,15,14,45];
 let teenager=ages.some(function(age){
    if(ages<18){
        return true;
    }
 });
 console.log(teenager);
 */

 /*7. Objective: Create an array of decimal numbers. Use every() to check if all
  numbers are less than 100 and print the result.*/
/*
let numbers = [45.5, 67.2, 89.9, 23.4, 99.1];
let result = numbers.every(function(number) {
    return number < 100;
});
console.log(result);
*/

/* 8. Objective: Create an array of car manufacturers. Use find() to locate the
 first manufacturer that contains the letter 'o' and print the result.*/
/*
let cars = ["Toyota", "Honda", "BMW", "Audi"];
let result = cars.find(function(car) {
    return car.includes("o");
});
console.log(result);
*/

/*9. Objective: Create an array of movie titles. Use findIndex() to find the index
 of a specific title you're interested in, and print that index.*/
 /*
let movies = ["Frozen", "Hotel Transylvania", "Toy Story", "Moana", "Shrek"];
let index = movies.findIndex(function(movie) {
    return movie === "Frozen";
});
console.log(index);
*/




//-----------------Objects----------------------


/*### Home Task 1: Create and Print an Object

- Create an object called `student` with properties:
    - `name` (string)
    - `age` (number)
    - `grade` (string)
- Print each property separately using dot notation. */
/*
let student = {
    name: "Nimra",
    age:20,
    grade: "A+"
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);
*/

/*### Home Task 2: Add and Modify Properties

- Using the `student` object from Task 1,
- Add a new property called `hobby` and assign it any hobby you like.
- Change the `grade` property to a new value.
- Print the updated object.  */
/*
let student = {
    name: "Nimra",
    age: 20,
    grade: "A+"
};
student.hobby = "Learning";
student.grade = "A";
console.log(student);
*/

/*### Home Task 3: Check and Delete a Property

- Check if the `student` object has the property `age`.
- If it exists, delete the `age` property.
- Print the final object after deletion.  */
/*
let student = {
    name: "Nimra",
    age: 20,
    grade: "A+"
};
student.hobby = "Learning";
console.log(student.age);
delete student.age;
console.log(student);
*/

//----or-----

/*
let student = {
    name: "Nimra",
    age: 20,
    grade: "A+"
};
student.hobby = "Learning";
if ("age" in student) {
    delete student.age;
}
console.log(student);
*/

//----------------------Looping and Nesting in Objects--------------------

/*### Task 1: Create an Object

Create an object called `library` that represents a book collection. The object should have these properties:

- `name` (string): Name of the library
- `location` (string): Location of the library
- `books` (object): A nested object containing at least 3 books. Each book should have `author` and `pages` properties.
*/
/*
let library = {
    name: "City Library",
    location: "Downtown",
    books:{
        "Javascript Guide":{
            author: "Marks",
            pages: 320
        },
        "Phython Basics":{
            author: "Anna",
            pages: 250
        },
       "CSS Tricks":{
        author: "Lara",
        pages: 200
       } 
    }
};
console.log(library);

//### Task 2: Loop and Print

//- Loop through the `library` object and print the top-level properties (`name` and `location`).
//- When you reach the `books` property (which is an object), loop through it and print the book name, author, and pages.


for(let key in library){
    if(key==="books"){
        for(let books in library.books){
            console.log("Books:"+ books +",Author:"+library.books[books].author+",Pages:"+library.books[books].pages);
        }
    }else{
         console.log(key+":"+library[key]);
         }
}
*/
   
/*# Class Task

**Task 1:**

Create an object called `student` with the following properties:

- name (string)
- age (number)
- course (string)
- grades (object) — nested object with keys for different subjects and their marks (e.g., Math: 85, English: 92)
*/
/*
let student={
    name: "Nimra",
    age: 20,
    course: "Bs Computer Science",
    grades:{
        sub1:{
            title: "AICT",
            marks: 94

        },
        sub2:{
            title: "PF",
            marks: 90
        },
        sub3:{
            title: "OOP",
            marks: 62
        }
    }

};
console.log(student);
//**Task 2:**

//Write a for in loop to print all the top-level properties (name, age, course) with their values.

for(let key in student){
    if(key==="grades"){
        for(let grades in student.grades){
            console.log("Title:"+ student.grades[grades].title+ ",Marks:"+ student.grades[grades].marks);
        } 
    }else{
        console.log(key+ ":" + student[key]);
    }
}

//----------------------------Object Methods and ‘this’ keyword----------------
//Home Task
/*### Task 1: Create an Object with a Method

Create an object called `backpack` with these properties:

- `brand` (string)
- `color` (string)
- `size` (string)

Add a method `describe()` that prints:

`This is a [color] [brand] backpack ([size]).`

Call the `describe()` method to see the output.
*/
/*
let backpack={
    brand: "Herschel",
    color: "Cream",
    size:  "Medium",
    contents:{
        books: 6,
        pencils: 3,
        laptop: 1
    },
  describe: function(){
    console.log("This is a " + this.color+ " " + this.brand + " backpack [" + this.size + "].");
//### Task 2: Add Nested Object and Loop Through It

//Add a nested object called `contents` inside `backpack`. Include at least 3 items with quantities
    for( let key in this.contents){
        console.log(key+ ":" +this.contents[key]);
    }
 }
    
};
backpack.describe();
*/

/*# Logic Building Question 

You have an object representing a **smartphone** with details about its brand, model, and a nested object of installed apps with their usage times in minutes:
Write a function that:
Tasks:
1. Prints the brand and model of the smartphone.
2. Loops through the `apps` object and prints each app’s name and usage time.
3. Calculates and prints the total app usage time (sum of all app times).    */

/*
let smartphone = {
  brand: "Samsung",
  model: "Galaxy S21",
  apps: {
    WhatsApp: 120,
    Instagram: 90,
    YouTube: 45,
    Email: 30
  },

describe: function() {
    //Prints the brand and model of the smartphone.
    console.log("Brand:" + this.brand);
    console.log("Model:" + this.model);
    //Loops through the apps object and prints each app’s name and usage time.
    let total=0;
    for(let key in this.apps){
        console.log(key + ":" + this.apps[key]);
         //3. Calculates and prints the total app usage time (sum of all app times).
         total=total+this.apps[key]; 
    }
   console.log("Total app usage time is: " + total +" minutes");

    }

};
smartphone.describe();
*/
