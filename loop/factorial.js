// Find factorial of a number
//5 --> 120

const getFactorial = (num)=>{
    let fact = 1;
    for(let i =1;i<=num;i++){
        fact = fact * i;
    }
    return fact;

}

const result  = getFactorial(5);
console.log(`factorial of a no is ${result}`);
