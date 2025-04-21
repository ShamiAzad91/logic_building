let str = "Azad123@#World!";

let alphabets = 0;
let digits = 0;
let specials = 0;

for (let char of str) {
  if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
    alphabets++;
  } else if (char >= '0' && char <= '9') {
    digits++;
  } else {
    specials++;
  }
}

console.log(`Alphabets: ${alphabets}`);
console.log(`Digits: ${digits}`);
console.log(`Special Characters: ${specials}`);
