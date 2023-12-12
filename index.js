// ─────────────────────────────────────────────────────────────────────────────
// Unit converter
// Scrimba solo project
// written by Gábor Parlag >>> g.parlag@gmail.com
// ─────────────────────────────────────────────────────────────────────────────


const conInput = document.querySelector("#con-input")
const conBtn = document.querySelector("#con-btn")
const outLength = document.querySelector("#out-length")
const outVol = document.querySelector("#out-vol")
const outMass = document.querySelector("#out-mass")

const meter = 3.281
const liter = 0.264
const kilo = 2.204
const feet = 1 / meter
const gallon = 1/ liter
const pound = 1 / kilo

conInput.value = null

conBtn.addEventListener("click", function () {
    let conInVal = conInput.value

    let lengthMet = conInVal * feet
    let lengthImp = conInVal * meter

    let volMet = conInVal * gallon
    let volImp = conInVal * liter

    let massMet = conInVal * pound
    let massImp = conInVal * kilo

    outLength.textContent = `${conInVal} meters = ${lengthImp.toFixed(3)} feet | ${conInVal} feet = ${lengthMet.toFixed(3)} meters`
    outVol.textContent = `${conInVal} liters = ${volImp.toFixed(3)} gallons | ${conInVal} gallons = ${volMet.toFixed(3)} liters`
    outMass.textContent = `${conInVal} kilos = ${massImp.toFixed(3)} pounds | ${conInVal} pounds = ${massMet.toFixed(3)} kilos`
})



