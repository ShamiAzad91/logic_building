
// Program to Find Maximum Occurring Character
let str = "programmer breath";
let frequency = {};
let maxChar = '';
let maxCount = 0;

for (let char of str) {
  if (char === ' ') continue; // skip spaces

  frequency[char] = (frequency[char] || 0) + 1;

  if (frequency[char] > maxCount) {
    maxCount = frequency[char];
    maxChar = char;
  }
}

console.log(`Maximum occurring character: '${maxChar}' occurred ${maxCount} times`);
