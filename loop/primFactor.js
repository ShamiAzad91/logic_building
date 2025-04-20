//prime factor

const getPrimeFactor = (num)=>{
    for(let i = 2;num>1;i++){
        while (num%i == 0) {
            console.log(i);
           num =  parseInt(num/i);
            
            
        }
    }
    
}
getPrimeFactor(36)