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

let calculateCompoundInterest = (P, r, n, t) => {
    return P * Math.pow(1 + r / n, n * t);
};
console.log(calculateCompoundInterest(10000,0.05,4,2));
