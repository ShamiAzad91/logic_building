// Print sum of all odd numbers from 1 to n
const isPrintSum = function(num){
    let sum = 0;
    for(let i = 1; i<=num; i++){
        if(i%2 !== 0){
            sum = sum + i
        }
    }
    return sum;
}

const result = isPrintSum(10);
console.log(`sum of no is ${result}`);
