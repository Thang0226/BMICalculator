let w = + prompt('Input your weight (kg):', 0)
let h = + prompt('Input your height (m):', 0)

let bmi = w / h**2

if (bmi < 18) {
    document.write("Underweight");
}
else if (bmi < 25.0) {
    document.write("Normal");
}
else if (bmi < 30.0) {
    document.write("Overweight");
}
else {
    document.write("Obese");
}