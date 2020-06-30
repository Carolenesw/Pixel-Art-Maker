// Select size input
const sizePicker = document.getElementById("sizePicker");
let inputWidthElement = "";
let inputHeightElement = "";

// Select color input
let colorPicker = "";
const pixelCanvas = document.getElementById("pixelCanvas");

// const tData = document.createElement("td");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function () {

    event.preventDefault();
   
    // add click events with values
    inputHeightElement = document.getElementById("inputHeight").value;
    inputWidthElement = document.getElementById("inputWidth").value;

    makeGrid(inputHeightElement, inputWidthElement);

});


//validation code to see State field is mandatory.  
function makeGrid(height, width) {
    // use innerHTML to remove any existing table cells 
    pixelCanvas.innerHTML = "";
    
// create table row and data to append to pixel Convas 
let tableRows = document.createElement("tr");

    // loop for each row based on height
    for (let i = 0; i < height; i++) {
        tableRows = pixelCanvas.insertRow(i);

        // add data for each row/cell based on width
        for (let j = 0; j < width; j++) {
            let cell = tableRows.insertCell(j);

            // add color to cell on click
            cell.addEventListener("click", function () {
                event.preventDefault();

                colorPicker = document.getElementById("colorPicker").value;
                // add background color
                cell.style.backgroundColor = colorPicker;

                
                // if (colorPicker === tableRows) {
                //     // Your code here
                //     pixelCanvas.firstChild(tableRows);
                // }
            });

        };

    };

};


// pixelCanvas.addEventListener('click', function(event) {
//     if (event.target.nodeName === tableRows) {
//         // Your code here
//         pixelCanvas.firstChild(tableRows);
//     }
// });


