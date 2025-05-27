// Data types in javaScript
/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. array
7. BigInt
8. Object
*/  


// string
let name = "md nayem";
console.log(typeof name); // string

let firstName = "md";
let medelName = "nayem";
let lastName = "Islam";
fullName = `my name is ${firstName} ${medelName}`;
console.log(fullName); // my name is md nayem
fullName = firstName +" " + medelName + " " + lastName;
fullName = fullName.toUpperCase(); // MD NAYEM ISLAM
console.log(fullName); // MD NAYEM ISLAM


// number
let age = 25;
console.log(typeof age); // number
let number1 = 10;
let number2 = 20;
let sum = "My name is "+fullName+ ", I am "+age+" years Old "; // 30

console.log(sum); // 30
console.log(number1 + number2); // 30

let pi = 3.14;
console.log(typeof pi); // number

let numberBig = 12345678901234567890n // BigInt
let numberBig2 = BigInt(12345678901234567890); // BigInt
console.log(typeof numberBig); // bigint
console.log(typeof numberBig2); // bigint


// boolean
let isMarried = false;
console.log(typeof isMarried); // boolean
let isSingle = true;
console.log(typeof isSingle); // boolean


// undefined
let someInfo;
console.log(typeof someInfo); // undefined
someInfo = "I am a web developer";
console.log(someInfo); // I am a web developer

// null
let nullValue = null; 
console.log(typeof nullValue); // object


// array
let numbers = [1, 2, 3, 4, 5, 2, 1, 9, 5, 7, 8, 3, 6, 4]
console.log(typeof numbers); // array
console.log(numbers.length); // 14
numbers[0] = 0; // changing the first element
numbers[1] = 1; // changing the second element
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4
console.log(numbers[4]); // 5
console.log(numbers[5]); // 2
console.log(numbers[6]); // 1
console.log(numbers[7]); // 9
console.log(numbers[8]); // 5
console.log(numbers[9]); // 7
console.log(numbers[10]); // 8
console.log(numbers[11]); // 3
console.log(numbers[12]); // 6
console.log(numbers[13]); // 4
console.log(numbers); // [1, 2, 3, 4, 5, 2, 1, 9, 5, 7, 8, 3, 6, 4]


// object
let person = {
    name: "md nayem",
    age: 25,
    isMarried: false,
    address: {
        city: "Dhaka",
        country: "Bangladesh"},
    number : "01712345678",
};
console.log(typeof person); // object
console.log(person.name); // md nayem
console.log(person.age); // 25
console.log(person.address.city); // Dhaka
console.log(person.address.counrty); // Bangladesh);
console.log(person.number); // 01712345678
