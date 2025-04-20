// find hcf 
const getHCF = (num1,num2)=>{
    let hcf = 1;
    let min = num1>num2?num2:num1;

    for(let i = 1;i<=min;i++){
        if(num1%i ===0 && num2%i ===  0){
            hcf = i;
        }
    }
    return [hcf,num1,num2]
}


const [num1,num2,hcf] = getHCF(12,30);
console.log(`hcf of ${num1} and ${num2} is ${hcf}`);
