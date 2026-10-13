document.querySelector("#submit").addEventListener("click", function() {
    document.querySelector("#messy").innerHTML = makemess();
})

function makemess() {
    let agevalue = 0;
    if (document.querySelector("#inp1").value < 4) {
        agevalue = 0;
    }else if (document.querySelector("#inp1").value >= 4 && document.querySelector("#inp1").value <= 12) {
        agevalue = 10;
    }else if (document.querySelector("#inp1").value >= 13 && document.querySelector("#inp1").value <= 64) {
        agevalue = 20;
    }else if (document.querySelector("#inp1").value >= 65) {
        agevalue = 12;
    }
    if (document.querySelector("#inp").value === "" || document.querySelector("#inp1").value === null) {
        return ("Please enter a valid name and age.")
    }
    return (document.querySelector("#inp").value + ", your ticket costs $" + agevalue + ".");

}