// Select size input
const sizeInput = document.getElementById("sizePicker");
let inputWEl = "";
let inputHEl = "";

// Select color input
let inputCol = "";
const pixelCan = document.getElementById("pixelCanvas");

// create table row and data to append to pixel Convas 
let tableRows = document.createElement("tr");
const tData = document.createElement("td");

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", function () {

    event.preventDefault()

    // add click events with values
    inputHEl = document.getElementById("inputHeight").value;
    inputWEl = document.getElementById("inputWidth").value;
   
    makeGrid(inputHEl, inputWEl);

})

//validation code to see State field is mandatory.  

function makeGrid(height, width) {
    // loop for each row based on height
    for (var i = 0; i <= height; i++) {
        tableRows = pixelCan.insertRow(i);
        
        // add data for each row/cell based on width
        for (let j = 0; j <= width; j++) {
            let cell = tableRows.insertCell(j)

            // add color to cell on click
            cell.addEventListener("click", function () {
                event.preventDefault()

                inputCol = document.getElementById("colorPicker").value;
                // add background color
                cell.style.backgroundColor = inputCol;
               
            });
  // delete first row/child cell/index 0 when loops runs 
//   pixelCan.firstElementChild.remove();
        };

    };

};
// Your code goes here!



