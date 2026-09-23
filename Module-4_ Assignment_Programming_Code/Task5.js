let numbers = [10, 20, 10, 30, 20, 40, 30]; // Stores numbers

let uniqueNumbers = [...new Set(numbers)]; // Removes duplicate numbers

console.log("Original Array:", numbers); // Prints original array
console.log("Array without duplicates:", uniqueNumbers); // Prints unique values