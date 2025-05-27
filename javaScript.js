// JavaScripts operators

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary (conditional) Operator
*/


// Arithmetic Operators
let a = 30;
let b = 15;
// console.log(a + b); // addition

let c = a + b;
console.log(c); // addition
console.log(a - b); // subtraction
console.log(a * b); // Multiplication
console.log(a/b); // division
console.log(a % b ); // modulus

/*
// real life example to modulus operators
let userInput = prompt("Enter a Number");
let number = parseInt(userInput);

if (number  % 2 == 0) {
    console.log(`${number} is even number`);
}else {
    console.log(`${number} is odd number`);
}
*/

// increment and decrement operators
let x = 10;
x = x + 1; // increment
y = x - 1; // decrement
console.log(x);
console.log(y);

// Assignment Operators
let d = 5;
let e = 8;
d += e; // d = d + e
console.log(d); // 13
d -= e; // d = d - e
console.log(d); // 5
d *= e; // d = d * e
console.log(d); // 40
d /= e; // d = d / e
console.log(d); // 5
d %= e; // d = d % e
console.log(d); // 5
d **= e; // d = d ** e
console.log(d); // 390625 


// comparison operators
let num1 = 10;
let num2 = 15;
console.log(num1 == num2); // equal to
console.log(num1 === num2); // strict equal to
console.log(num1 != num2); // not equal to
console.log(num1 !== num2);  // strict not equal to
console.log(num1 > num2); // greater than
console.log(num1 < num2); // less than
console.log(num1 >= num2); // greater than or equal to
console.log(num1 <= num2);  // less than or equal to


// logical operators
let p = true;
let q = false;
console.log(p && q); // logical AND
console.log(p || q); // logical OR
console.log(!p); // logical NOT

// Bitwise Operators
let m = 1; // 0001 in binary
let n = 2; // 0010 in binary
console.log(m & n); 

// Bitwise AND
console.log(m | n); // Bitwise OR
console.log(m ^ n); // Bitwise XOR
console.log(~m); // Bitwise NOT
console.log(m << 1); // Bitwise left shift
console.log(m >> 1); // Bitwise right shift

// Ternary (conditional) Operator
let age = prompt("Enter your age:");
age = parseInt(age);;
if (age >= 18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}

