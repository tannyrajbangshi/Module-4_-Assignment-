let text = "Tanny rajbangshi"; // Stores the string

let count = 0; // Stores vowel count

for (let char of text.toLowerCase()) {
    // Checks each character in lowercase

    if ("aeiou".includes(char)) {
        count++; // Increases count if it is a vowel
    }
}

console.log("String:", text); // Prints the string
console.log("Number of vowels:", count); // Prints vowel count