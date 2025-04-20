//reverse of no 

const getReverseNumber = (num)=>{
    let rev = 0;
    let rem = 0;
    while(num>0){
        rem  = num %10;
        rev = rev*10 + rem;
        num = parseInt(num/10)
    }
    return rev;

}
const result = getReverseNumber(23442);
console.log(`reverse of a no is ${result}`);
