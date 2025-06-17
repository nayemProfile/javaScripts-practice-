// Math object in JavaScript

// Example of using Math object methods
console.log("Math.PI:", Math.PI); // Output: 3.141592653589793
console.log("Math.E:", Math.E); // Output: 2.718281828459045
console.log("Math.sqrt(16):", Math.sqrt(16)); // Output: 4
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Output: 8
console.log("Math.max(10, 20, 30):", Math.max(10, 20, 30)); // Output: 30
console.log("Math.min(10, 20, 30):", Math.min(10, 20, 30)); // Output: 10

// Example of using Math.random() to generate a random number
console.log("Math.random():", Math.random()); // Output: A random number between 0 and 1

// Example of using Math.floor() to round down a number
console.log("Math.floor(4.7):", Math.floor(4.900303000599484)); // Output: 4
console.log("Math.floor(4.3):", Math.floor(9.00000303000599484)); // Output: 9

// Example of using Math.ceil() to round up a number
console.log("Math.ceil(4.3):", Math.ceil(4.36488374938)); // Output: 5
console.log("Math.ceil(4.7):", Math.ceil(9.00303000599484)); // Output: 10

// Example of using Math.round() to round a number to the nearest integer
console.log("Math.round(4.510000899):", Math.round(4.5)); // Output: 5
console.log("Math.round(4.4979999):", Math.round(4.4)); // Output: 4

// Example of using Math.abs() to get the absolute value of a number
console.log("Math.abs(-5):", Math.abs(-5)); // Output: 5 alowas seen the positive value



function playLudo() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSource = 'img/' + randomNumber + '.png';

    let img = document.getElementById('imgSrc');
    
    // Reset and trigger animation
    img.classList.remove('rotate');
    void img.offsetWidth; // reflow trick to restart animation
    img.classList.add('rotate');

    // Update image
    img.src = imageSource;

    // // Optional: play dice sound
    // let sound = new Audio('audio/dice.mp3');
    // sound.play();
}
