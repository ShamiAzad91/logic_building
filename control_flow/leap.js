// Check leap year
const getLeapYear = function (year){
    let result = 0;
    if((year%4 ===0 )&& (year%100!=0) || (year%400 === 0)) {
        result = "leap"
    }else{
        result = "not leap"
    }
    return result
}

// const result = getLeapYear(1700);//not leap year
const result = getLeapYear(2016);//leap year

console.log(`given year is ${result} year`);
