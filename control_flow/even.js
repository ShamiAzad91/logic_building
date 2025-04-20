// Check even or odd
const isEven = function(num){
    let result = 0;
    if(num %2 === 0){
        result = "even"
    }else{
        result = "odd"
    }
  return result 
};

let result = isEven(12);
console.log(`no is ${result}`);
