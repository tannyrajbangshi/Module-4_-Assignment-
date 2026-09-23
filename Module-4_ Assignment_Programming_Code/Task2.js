let a = 25; // First number
let b = 40; // Second number
let c = 30; // Third number

let largest; // Stores the largest number

if (a >= b && a >= c) {
    largest = a; // a is largest
} else if (b >= a && b >= c) {
    largest = b; // b is largest
} else {
    largest = c; // c is largest
}

console.log("Largest number is:", largest); // Prints largest number