// Object in JavaScript

// Creating an object
const person = {
    // key: value pairs
    firstName: "Md",
    lastName: "Nayem",
    age: 25,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);

const newSymbol = Symbol("Key1");
const mobilePhone = {
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 999,
    features: ["5G", "Face ID", "Triple Camera"],
    'selfeie camera': "12 MP",
    [newSymbol]: "This is a symbol key",

};
console.log(mobilePhone);
console.log(mobilePhone.brand);
console.log(mobilePhone.model);
console.log(mobilePhone.features);
console.log(mobilePhone['selfeie camera']);
console.log([newSymbol]);

// Accessing object properties
console.log(mobilePhone[newSymbol]); // Accessing symbol key
// Adding a new property
mobilePhone.color = "Space Black";
console.log(mobilePhone); // Accessing  Object property
console.log(mobilePhone.color); // Accessing new property
/*
// Deleting a property \
delete mobilePhone.price;
delete mobilePhone.color;
console.log(mobilePhone.price); // Should be undefined after deletion
console.log(mobilePhone.color); // Should be undefined after deletion
 */

// Checking if a property exists
let propertiesCheck = mobilePhone.hasOwnProperty("color"); // Check if the property exists
console.log(propertiesCheck); // true if exists, false if not


// contration of object
const person1 = {
    firstName: "Md",
    lastName: "Nayem",
    age: 25,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person1);
// Using Object constructor
const person2 = new Object();
console.log(person2);

// Using Object.create() to create an object with a prototype
const person3 = Object.create(person1);
person3.firstName = "Alice";