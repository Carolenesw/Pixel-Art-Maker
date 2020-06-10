
// Select size input
const sizeInput = document.getElementById("sizePicker");
let inputWEl = ""; 
let inputHEl = "";

// Select color input
const inputCol = document.getElementById("colorPicker");
const pixelCon = document.getElementById("pixelCanvas");

// create table row to append to pixel Convas 
const tableRows = document.createElement("tr");
// const trId = document.createElement("")

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", function() {

event.preventDefault()

inputHEl = document.getElementById("inputWidth").value;
inputWEl = document.getElementById("inputHeight").value;

makeGrid(inputHEl, inputWEl)

console.log("Height: " + inputHEl + " and Width: " + inputWEl)

})

    //validation code to see State field is mandatory.  


function makeGrid(height, width) {
// prevent duplications when page is refresh 
tableRows.style.display = "none"

for (var i = 1; i <= height; i++) {
    pixelCon.append(tableRows)
}
// Your code goes here!

}