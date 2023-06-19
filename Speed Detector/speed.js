let speed
let demerit
//function prompts user to input speed
function speedLimit(){
    let input = prompt("Enter speed"); //input keyed in to prompt is returned as a string
    speed = parseInt(input); 
    if (speed <= 70){
        let message = "Ok"
        console.log(message);
        return message;
    }
    //calculates demerit points
    else if (speed > 70){
        let difference = speed - 70;
        let div = difference / 5;
        demerit = (Math.floor(div)) * 1;
        console.log(`You have ${demerit} demerit points`);
        //if demerit points are greater than 12 license is suspended
        if (demerit >= 12){
            console.log("License Suspended")
        }
    }
}
speedLimit()