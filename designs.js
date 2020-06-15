// Select size input
const sizeInput = document.getElementById("sizePicker");
let inputWEl = ""; 
let inputHEl = "";

// Select color input
let inputCol = "";
const pixelCan = document.getElementById("pixelCanvas");

// create table row and data to append to pixel Convas 
let tableRows = document.createElement("tr");
const tData = document.createElement("td")


// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", function() {

event.preventDefault()

// add click events with values
inputHEl = document.getElementById("inputHeight").value;
inputWEl = document.getElementById("inputWidth").value;
inputCol = document.getElementById("colorPicker").value;

makeGrid(inputHEl, inputWEl)

console.log("Height: " + inputHEl + " and Width: " + inputWEl)

})

    //validation code to see State field is mandatory.  

function makeGrid(height, width) {
// prevent duplications when page is refresh and add table rows 
tableRows.style.display = "none"
tableRows = pixelCan.insertRow()

for (var i = 1; i <= height; i++) {
    // create id for each increment for the table row
    // pixelCan.append(tableRows.setAttribute("id", "trTable" + i) + i)
// document.write("what is the number" + i)
    // pixelCan.append(tableRows.setAttribute("id", "trTable")+ i) 
    // pixelCan = pixelCan + i
    // tableRows.setAttribute("id", "trTable")
    
    // pixelCan.append(tableRows)
    // tableRows.setAttribute("id", "trTable")
    // tableRows.value
    // trTable.value
// console.log(trTable + i)
    // for (var x = 1; x <= width; x++) {

    //     // add data for each row
    //     tableRows.append("tData") + i
    //     console.log(x)
    //     // console.log(trID)
    // }
   console.log(tableRows + i)
   console.log(pixelCan)
   console.log(i)
}
// Your code goes here!

}

for (var i = 0; i< 10; i++) {
    document.write(" my number is " + i );
}