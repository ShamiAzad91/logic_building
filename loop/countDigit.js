// Find number of digits in a number
const countDigit = function(num){
    let count = 0;
    while (num!=0) {
        count = count + 1;
        num = parseInt(num/10);
        
    }
    return count;

}

// const result  = countDigit(13428);
const result  = countDigit(1233428);

console.log(`no of digit is ${result}`);
