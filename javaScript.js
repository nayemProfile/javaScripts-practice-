// JavaScript Functions 
function myFunction1(){
    console.log("Hello World");
}
myFunction1();

// Function with parameters
/*
let fullName = prompt("Enter Your Full Name");
let age = prompt("Enter Your Age");
function myFunction(fullName, age) {
    console.log("Hello, My Name is " + fullName + " I am "+ age + " years old."); 
}
myFunction(fullName, age);
*/

// Function action with button
function clickHareBtn() {
    console.log("I Im a cleckable function");
}
 document.getElementById('clickable').addEventListener('click', clickHareBtn);

// Function with return value
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(5, 10);
let result2 = addNumbers(20, 30);
let result3 = addNumbers(100, 200);
console.log("The result of the addition is: " + result, result2, result3);


// self-invoking function
(function(message) {
    console.log("This is a self-invoking function", message);
})("hello I am Nayem ");

// Function with default parameters
function greet(name = "Guest", age = 18) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}  
greet(); // No arguments, uses default values
greet("Alice", 25); // Custom values

// anonymous function
let myAnonymousFunction = function() {
    console.log("This is an anonymous function");
};
myAnonymousFunction(); // Call the anonymous function

// Arrow function
let myArrowFunction = () => {
    console.log("This is an arrow function");
};
myArrowFunction(); // Call the arrow function
