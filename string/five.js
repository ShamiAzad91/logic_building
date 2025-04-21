// // program to find first occurrence of a character in a given string.
// let str1 = "hello world";
// let chartosearch = "o";
// let str3 = str1.indexOf(chartosearch);
// console.log(str3);


// program to find last occurrence of a character in a given string.
let str = "programmer breath";
let charToFind = "r";

let lastIndex = str.lastIndexOf(charToFind);

if (lastIndex !== -1) {
  console.log(`Last occurrence of '${charToFind}' is at index ${lastIndex}`);
} else {
  console.log(`Character '${charToFind}' not found.`);
}
