// sum of digit of  a no 
//2342=>11
const sumofDigit = (num)=>{
    let sum = 0;
    while (num>0) {
        sum = sum + num%10;
        num = parseInt(num/10)        
    }
    return sum;
}

const result = sumofDigit(2342);//11
console.log(`sum of digit of a no is ${result}`);
