//Begin by defining the variables
let basic
let benefits
let gross
let nssf
let nhif

let netSalary



function calculatedSalary(){
    basic = prompt("Basic Salary");
    document.getElementById("basic").innerHTML = `Basic Salary: ${basic}`;

    benefits = prompt("Enter Benefits");
    document.getElementById("benefits").innerHTML = `Benefits: ${benefits}`;

    gross = parseInt(basic) + parseInt(benefits);
    document.getElementById("gross").innerHTML = `Gross Salary: ${gross}`;

    nssf = gross * 0.06; //nssf calculation
    let newGross = gross - nssf; 

    
   
    //PAYE deductions 
    let paye 
    let paye0
    let paye1;
    let diff1;
    let paye2;
    let diff2;
    let paye3;
    let diff3;
    
    if (newGross <= 24000) {
      paye0 = newGross * 0.1;
      paye = paye0;
    } else {
      diff1 = newGross - 24000;
      paye1 = 24000 * 0.1;
    
      if (diff1 < 32333 && diff1 <= 24000) {
        paye2 = diff1 * 0.25;
        paye = paye1 + paye2;
      } else if (diff1 > 24000) {
        diff2 = 32333 - 24000;
        paye2 = diff2 * 0.25;
        diff3 = diff1 - diff2;
        paye3 = diff3 * 0.3;
        paye = paye1 + paye2 + paye3
      }
    }
    
    //NHIF deduction
    if (gross <= 5999){
        nhif = 150;
    }
    else if (gross >=6000 && gross <= 7999){
        nhif = 300;
    }
    else if (gross >= 8000 && gross <= 11999){
        nhif = 400;
    }
    else if (gross >= 12000 && gross <= 14999){
        nhif = 500;
    }
    else if (gross >= 15000 && gross <= 19999){
        nhif = 600;
    }
    else if (gross >= 20000 && gross <= 24999){
        nhif = 750;
    }
    else if (gross >= 25000 && gross <= 29999){
        nhif = 850;
    }
    else if (gross >= 30000 && gross <= 34999){
        nhif = 900;
    }
    else if (gross >= 35000 && gross <= 39999){
        nhif = 950;
    }
    else if (gross >= 40000 && gross <= 44999){
        nhif = 1000;
    }
    else if (gross >= 45000 && gross <= 49999){
        nhif = 1100;
    }
    else if (gross >= 50000 && gross <= 59999){
        nhif = 1200;
    }
    else if (gross >= 60000 && gross <= 69999){
        nhif = 1300;
    }
    else if (gross >= 70000 && gross <= 79999){
        nhif = 1400;
    }
    else if (gross >= 80000 && gross <= 89999){
        nhif = 1500;
    }
    else if (gross >= 90000 && gross <= 99999){
        nhif = 1600;
    }
    else if (gross >= 100000){
        nhif = 1700;
    }
    let relief = 2400; //personal relief to be deducted from total deduction
    let newPaye = paye - relief;
    let deductable = newPaye + nssf + nhif;
    netSalary = gross - deductable; //finding the net salary 
        
    console.log("Gross salary:", gross)
    console.log("PAYE deductions:", newPaye)
    console.log("nssf deduction:", nssf)
    console.log("NHIF deduction:", nhif)
    console.log("Total deductions:", deductable)
    console.log("Net Salary:", netSalary);

    
    document.getElementById("paye").innerHTML = `PAYE: ${newPaye}`;
    document.getElementById("nssf").innerHTML = `NSSF: ${nssf}`;
    document.getElementById("nhif").innerHTML = `NHIF: ${nhif}`;
    document.getElementById("deductions").innerHTML = `Total deductions: ${deductable}`;
    document.getElementById("salary").innerHTML = `Net salary: ${netSalary}`;
     
}
