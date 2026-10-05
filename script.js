/*
console.log("hi")
let y=prompt("Name");
console.log(y)
let x=Number(prompt("age"));
console.log(x)
let z=prompt("Roll no");
console.log(z)
console.log(prompt("Name "))
*/
/*let variable = 10;            // Initially a number
console.log(variable);        // Output: 10

variable = "Now I'm a string"; // Now it's a string
console.log(variable);         // Output: Now I'm a string

x=null;
y=undefined;
console.log(x);*/



//Sprint 3 Module 1 for loop) (home Tasks)

//prime number form 1 to 50(logic building)

/*
for(let num=2;num<=50;num++){
    let isPrime=true;

for(let i=2;i<=num;i++){
    if(num%i===0){
        isPrime=false;
        break;
    }
    if(isPrime){
        console.log(num);
    }
}
}


*/

//print 10 number
/*
for(let i=1;i<=10;i++){
    console.log(i);
}

*/


//Multiplication Table

/*
num=Number(prompt("Enter number:"));
for(i=1;i<=10;i++){
     console.log(num + " x " + i + " = " + (num * i));   //+joins pieces of text together
}
*/


//sum of numbers
/*
let sum=0;
for(let num=1;num<=10;num++){
    sum=sum+num;

}
console.log(sum);
*/

//odd number
/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
*/

//counts down from 20 to 1

/*
for(let i=20;i>=1;i--){
    console.log(i);
}
    */

//-------------------------------------------------------------

//Task 1: Factorial of a Number 5
/*
let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);

*/

//factorial of any number

/*
let num = Number(prompt("Enter a number:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log(factorial);

*/

//Task 2: Print a Pattern

/*for(let i=1;i<=5;i++){                //wrong
    for(let k=1;k<=i;k--){
        console.log("*")
    }
}*/
/*
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let k = 1; k <= i; k++) {
        row = row + "*";
    }

    console.log(row);
}*/


//Task 3: Find the Sum of Even Numbers

/*
let sum=0;
for(let i=1;i<=20;i++){
    sum=sum+i;

}
console.log(sum);
*/

//Reverse Counting 50 to 1
/*
for(let i=50;i>=1;i--){
    console.log(i);
}
*/

//Find the First Number Divisible by 7

/*for(let i=1;i<=50;i++){
    if(i%7===0){
        console.log(i);
        break;
    }
}
*/

//Sprint 3 midule 2 while loop (Home tasks)

//Task 1: Find Factorial of 6 Using while Loop
/*
let factorial=1;
let i=1;
while(i<=6){
    factorial=factorial*i;
    i++;
}
console.log(factorial);

*/

//Task 2: Print Odd Numbers from 1 to 15

/*for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}
*/

//Task 3: Print "Hello" 5 Times Using do...while
let i=1;
do{
    
console.log("Hello");

}
while(i<2);