// Varialbes in JavaScript

// var - Old way of declaring variables
var oldName = "md nayem"; 
var oldAge = 25; 
console.log(`old Name: ${oldName}`);
console.log(`old Age: ${oldAge}`);

// let -Modern way of declaring variables
let newName = "nayem";
let newAge = 28;
console.log(`New Name: ${newName}`);
console.log(`New Age: ${newAge}`);

// const
const pi = 3.14; // Constant value
console.log(`Value of Pi: ${pi}`);

// Data Types in JavaScript
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = false; // Boolean
let undefinedVariable; // Undefined
let nullVariable = null; // Null
let bigIntVariable = BigInt(123456789012345678901234567890); // BigInt

console.log(`Number: ${number}`);
console.log(`String: ${string}`);
console.log(`Boolean: ${boolean}`);
console.log(`Undefined Variable: ${undefinedVariable}`);
console.log(`Null Variable: ${nullVariable}`);
console.log(`BigInt Variable: ${bigIntVariable}`);

// Type Conversion in JavaScript
let numString = "123"; // String
let num = Number(numString); // Convert string to number
let strNum = num.toString(); // Convert number to string
console.log(`Converted String to Number: ${num}`);
console.log(`Converted Number to String: ${strNum}`);


// Example of using variables in JavaScript
let name = "Md Nayem"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "gaming", "coding"]; // Array
let address = { // Object
    street: "123 Main St",
    city: "Dhaka",
    country: "Bangladesh"
};
console.log(`My Name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`Am I a student? ${isStudent}`);
console.log(`My hobbies are: ${hobbies.join(", ")}`);
console.log(`I live at ${address.street}, ${address.city}, ${address.country}`);