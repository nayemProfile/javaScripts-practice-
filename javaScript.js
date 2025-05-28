// Operator Precedence in JavaScript
// 1. Parentheses
let result1 = (2 + 3) * 4; // 20
console.log(result1);
/*
(2 + 3) * 4
= 5 * 4
= 20
*/

let result2 = 3 + 5 + 4 - 3 * 8 / 3; // 4
console.log(result2);
/*
3 + 5 + 4 - 3 * 8 / 3
= 3 + 5 + 4 - (3 * 8 / 3)
= 3 + 5 + 4 - (24 / 3)
= 3 + 5 + 4 - 8
= 3 + 5 + (4 - 8)
= 3 + 5 - 4
= 3 + 1
= 4
*/

let result3 = 2 + 3 * 4 - 5 / 2; // 11.5
console.log(result3);
/*
2 + 3 * 4 - 5 / 2
= 2 + (3 * 4) - (5 / 2)
= 2 + 12 - (5 / 2)
= 2 + 12 - 2.5
= 2 + 9.5
= 11.5
*/ 

let result4 = 2 + (3 * 4) - (5 / 2); // 10.5
/*
2 + (3 * 4) - (5 / 2)
= 2 + 12 - (5 / 2)
= 2 + 12 - 2.5
= 2 + 9.5
= 10.5
*/
console.log(result4);

// 2. Exponentiation
let result5 = 2 ** 3 + 4; // 12
/*
2 ** 3 + 4
= 8 + 4
= 12
*/
console.log(result5);

// 3. Multiplication, Division, and Modulus
let result6 = 2 * 3 + 4 / 2; // 8
/*
2 * 3 + 4 / 2  
= 6 + (4 / 2)
= 6 + 2
= 8
*/ 
console.log(result6);

// 4. Addition and Subtraction
let result7 = 2 + 3 - 4; // 1
/*
2 + 3 - 4
= 5 - 4
= 1
*/
console.log(result7);