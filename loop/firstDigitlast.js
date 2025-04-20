// Find first and last /digit
const getFirstandLastNumber = (num)=>{
    let first = 0;
    let last = 0;

    last = num%10;

    while(num>10){
        num = parseInt(num/10);
    }
    first = num;

    return [first,last]

}
const [first,last] = getFirstandLastNumber(234229);
console.log(`first digit is ${first} and last digit of a no is ${last}`);
