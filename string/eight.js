// program to remove all occurrence of a word in given string.
let str = "hello programmer breath, programmer is smart";
let wordToRemove = "programmer";

// Use RegExp with global flag to remove all occurrences
let result = str.replace(new RegExp(`\\b${wordToRemove}\\b`, 'g'), '');

console.log(result.trim());
