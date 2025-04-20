// Print day of week
const getDayName  = function(day){
    let result = null;
    switch (day) {
        case 1:
            console.log("Monday");
            result = "Monday"
            
            break;

        case 2: 
        console.log("Tuesday");
        result = "Tuesday"
        break;
        case 3: 
        console.log("Wednesday");
        result = "Wednesday"
        break;
        case 4: 
        console.log("Thrusday");
        result = "Thrusday"
        break;
        case 5: 
        console.log("Friday");
        result = "Friday"
        break;
        case 6: 
        console.log("Saturday");
        result = "Saturday"
        break;
        case 7: 
        console.log("Sunday");
        result = "sunday"
        break;

    
        default:
            console.log("invalid day ");
             result = "invalid"
            break;
    }
    return result;
}


const result = getDayName(3);
console.log(`the day name is ${result}`);
