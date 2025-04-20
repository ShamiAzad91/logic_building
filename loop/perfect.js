//perfect no

const checkPerfectNo = (num)=>{
    let temp = num;
    let sum = 0;
    for(let i = 1;i<=num-1;i++){
         
        if(num % i == 0){
            sum = sum + i;
        }

    }
    num = temp;
    if(sum === num){
        console.log(`${num} is perfect no`);
        
    }else{
        console.log(`${num} is not perfect no`);
        
    }
}

checkPerfectNo(6);