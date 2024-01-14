/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let unitNumberEl = document.getElementById("unit-number");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
let convertBtn = document.getElementById("convert-btn");

console.log(unitNumberEl);
console.log(lengthEl);
console.log(volumeEl);
console.log(massEl);

convertBtn.addEventListener("click", function () {
    console.log("Cliked");
    console.log(lengthEl);
    let num = Number(unitNumberEl.value);
    console.log(num);
    lengthEl.textContent = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} meters`;
    volumeEl.textContent = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num * 3.785).toFixed(3)} liters`;
    massEl.textContent = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num * 0.45359237).toFixed(3)} kilos`;
})
