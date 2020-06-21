// Select size input
const sizePicker = document.getElementById("sizePicker");
let inputWidth = "";
let inputHeight = "";

// Select color input
let colorPicker = "";
const pixelCanvas = document.getElementById("pixelCanvas");

// create table row and data to append to pixel Convas 
let tableRows = document.createElement("tr");
const tData = document.createElement("td");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function () {

    event.preventDefault()

    // add click events with values
    inputHeight = document.getElementById("inputHeight").value;
    inputWidth = document.getElementById("inputWidth").value;
   
    makeGrid(inputHeight, inputWidth);

})

//validation code to see State field is mandatory.  

function makeGrid(height, width) {
    // loop for each row based on height
    for (var i = 0; i <= height; i++) {
        tableRows = pixelCanvas.insertRow(i);
        
        // add data for each row/cell based on width
        for (let j = 0; j <= width; j++) {
            let cell = tableRows.insertCell(j)

            // add color to cell on click
            cell.addEventListener("click", function () {
                event.preventDefault()

                colorPicker = document.getElementById("colorPicker").value;
                // add background color
                cell.style.backgroundColor = colorPicker;
               
            });
  // delete first row/child cell/index 0 when loops runs 
//   pixelCan.firstElementChild.remove();
        };

    };

};
// Your code goes here!



