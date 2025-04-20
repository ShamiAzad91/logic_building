// Find sum of first and last digit
const sumFirstandLastDigit = (num)=>{
    let first=0,last = 0,sum = 0;
    last = num%10;

    while(num>10){
        num = parseInt(num/10);
    }
    first = num;
    sum = last + first;
    return [sum,first,last];
}


const [sum,first,last] = sumFirstandLastDigit(249283);
console.log(`sum of first digit ${first} and last digit ${last} is${sum}`);
