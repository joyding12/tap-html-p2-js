// Data for calculation
petdata = {
    "1" : { ill : "6%", costOfTreatment: 100 },
    "2" : { ill : "5%", costOfTreatment: 200 },
    "3" : { ill : "4%", costOfTreatment: 300 },
    "4" : { ill : "3%", costOfTreatment: 400 },
    "5" : { ill : "2%", costOfTreatment: 500 },
}


/*
Hints
document.getElementById("id").value;
document.getElementById("id").addEventListener("click", function);
document.addEventListener("DOMContentLoaded", function() {  });
*/

function jcp() {
    console.log("Button Clicked");
    gender = document.getElementById("genderdd").value;
    breed = document.getElementById("breedd").value;
    ageYrs = document.getElementById("agedd").value;

    avgTreatmentCost = petdata[ageYrs]["costOfTreatment"];
    illnessChance = parseFloat(petdata[ageYrs]["ill"])/100;

    ev= (avgTreatmentCost * illnessChance) * (1+gender) * (1+breed);
    ev = ev.toFixed(2);

    console.log(`Premium is: ${ev}`)
    document.getElementById("premcal").innerHTML= "$" +ev;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcbtn").addEventListener("click",jcp);
});