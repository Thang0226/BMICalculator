
function calculate() {
    let w = + document.getElementById("weight").value; 
    let h = + document.getElementById("height").value;

    let bmi = w / h**2
    let state = ""

    if (bmi < 18) {
        state = "Underweight";
    }
    else if (bmi < 25.0) {
        state = "Normal";
    }
    else if (bmi < 30.0) {
        state = "Overweight";
    }
    else {
        state = "Obese";
    }

    document.getElementById("result").innerHTML = state
}
