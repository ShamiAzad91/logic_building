//find lcm

const getLcm = (num1,num2)=>{
    let lcm = 1;
    let max = num1>num2 ? num1:num2;
    for(let i = max; i<=num1*num2;i++){
        if(i%num1 === 0 && i%num2 ===0 ){
            lcm = i;
            break;
        }
    }

    return[num1,num2,lcm]

}

const [num1,num2,lcm] = getLcm(12,30);
console.log(`lcm of ${num1} and ${num2} is ${lcm}`);
