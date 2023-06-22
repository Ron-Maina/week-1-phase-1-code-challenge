let speed
let demerit
let warning
//function prompts user to input speed
function speedLimit(){
    let input = prompt("Enter speed"); //input keyed in to prompt is returned as a string
    speed = parseInt(input);
    if (speed <= 70){
        let message = "Ok"
        console.log(message);
        document.getElementById("limit").innerHTML = `Limit: ${message}`;

    }
    //calculates demerit points
    else if (speed > 70){
        let difference = speed - 70;
        let points = difference / 5;
        demerit = (Math.floor(points)) * 1;
        console.log(`You have ${demerit} demerit points`);
        document.getElementById("limit").innerHTML = `Limit: ${`You have ${demerit} demerit points`}`;

    }
    //if demerit points are greater than 12 license is suspended
    if (demerit >= 12){
        warning = "License has been suspended"
        console.log(warning)
        document.getElementById("limit").innerHTML = `Limit: ${`You have ${demerit} demerit points`}`;
        document.getElementById("warning").innerHTML = `Warning: ${`Your ${warning}`}`;  
    }      
} 
