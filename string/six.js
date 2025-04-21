// search all occurrences of a character in a string
let str = "programmer breath";
let charToFind = "r";
let indexes = [];

for(let i = 0;i<str.length;i++){
    if(str[i]=== charToFind){
        indexes.push(i)
    }
}

if (indexes.length > 0) {
    console.log(`'${charToFind}' found at indexes: ${indexes}`);
  } else {
    console.log(`Character '${charToFind}' not found.`);
  }