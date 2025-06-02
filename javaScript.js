// Arrays in JavaScript

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry' ]
// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana  
console.log(fruits[2]); // Output: Cherry
// Modifying elements in an array
fruits[0] = "Mango";
console.log(fruits[0]); // Output: Mango
fruits[1] = "Orange";
console.log(fruits[1]); // Output: Orange
console.log(fruits); // Output: [ 'Mango', 'Orange', 'Cherry' ]

const ProgrammingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
console.log(ProgrammingLanguages); // Output: [ 'JavaScript', 'Python', 'Java', 'C++', 'Ruby' ]
// Accessing elements in an array
console.log(ProgrammingLanguages[0]); // Output: JavaScript
console.log(ProgrammingLanguages[1]); // Output: Python
console.log(ProgrammingLanguages[2]); // Output: Java
console.log(ProgrammingLanguages[3]); // Output: C++
console.log(ProgrammingLanguages[4]); // Output: Ruby
// Modifying elements in an array
ProgrammingLanguages[0] = "TypeScript";
console.log(ProgrammingLanguages[0]); // Output: TypeScript
ProgrammingLanguages[1] = "Go";
console.log(ProgrammingLanguages[1]); // Output: Go
console.log(ProgrammingLanguages); // Output: [ 'TypeScript', 'Go', 'Java', 'C++', 'Ruby' ]

// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];
// Accessing elements in an array
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
console.log(numbers[2]); // Output: 3
// Modifying elements in an array
numbers[0] = 10;
console.log(numbers[0]); // Output: 10

console.log(typeof fruits); // Output: object
console.log(typeof ProgrammingLanguages); // Output: object
console.log(typeof numbers); // Output: object

// Checking the length of an array
console.log(fruits.length); // Output: 3
console.log(ProgrammingLanguages.length); // Output: 5
console.log(numbers.length); // Output: 5

// Indexing in arrays
console.log(fruits[fruits.length - 1]); // Output: Cherry
console.log(ProgrammingLanguages[ProgrammingLanguages.length - 1]); // Output: Ruby
console.log(numbers[numbers.length - 1]); // Output: 5

// Adding elements to an array
fruits.push("Grapes");
console.log(fruits); // Output: [ 'Mango', 'Orange', 'Cherry', 'Grapes' ]
// Removing elements from an array
fruits.pop();
console.log(fruits); // Output: [ 'Mango', 'Orange', 'Cherry' ]
