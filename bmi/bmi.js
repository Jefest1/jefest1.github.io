'use strict';
document.getElementById("submit").addEventListener("click", bmiCalculator);

function bmiCalculator() {
    const cm = parseInt(document.getElementById("height").value);
    const kg = parseFloat(document.getElementById("weight").value);

    const newCm = parseFloat(cm / 100);
    let bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);

    document.getElementById("results").innerHTML = bmi;

    if (bmi < 18.6) {
        document.getElementById("message").innerHTML = "You're under wieght😃"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        document.getElementById("message").innerHTML = "Your wieght is in range😎😍"
    } else if (bmi > 24.9) {
        document.getElementById("message").innerHTML = "You're too big😂"
    };
}