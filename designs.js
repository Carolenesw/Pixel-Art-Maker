// Select size input
const sizeInput = document.getElementById("sizePicker");
let inputWEl = "";
let inputHEl = "";
// let cell = "";

// Select color input
let inputCol = "";
const pixelCan = document.getElementById("pixelCanvas");

// create table row and data to append to pixel Convas 
let tableRows = document.createElement("tr");
const tData = document.createElement("td")


// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener("submit", function () {

    event.preventDefault()

    // add click events with values
    inputHEl = document.getElementById("inputHeight").value;
    inputWEl = document.getElementById("inputWidth").value;
    

    makeGrid(inputHEl, inputWEl)

    console.log("Height: " + inputHEl + " and Width: " + inputWEl)

})

//validation code to see State field is mandatory.  

function makeGrid(height, width) {
    // prevent duplications when page is refresh and add table rows 
    // tableRows.style.display = "none"


    // loop for each row based on height
    for (var i = 0; i <= height; i++) {
        tableRows = pixelCan.insertRow(i);

        // add data for each row/cell based on width
        for (let j = 0; j <= width; j++) {
           let cell = tableRows.insertCell(j)

              // add color to cell 
         cell.addEventListener("click", function () {
            event.preventDefault()
            inputCol = document.getElementById("colorPicker").value;
            // add background color
            cell.style.backgroundColor = inputCol
            console.log(inputCol)
        })
       console.log(cell)

        }
       
    }
    // create id for each increment for the table row
    // pixelCan.append(tableRows.setAttribute("id", "trTable" + i) + i)

    // pixelCan.append(tableRows.setAttribute("id", "trTable")+ i) 
    // pixelCan = pixelCan + i
    // tableRows.setAttribute("id", "trTable")

    // pixelCan.append(tableRows)
    // tableRows.setAttribute("id", "trTable")
    // tableRows.value
    // trTable.value
    // console.log(trTable + i)
    // for (var x = 1; x <= width; x++) {

    //     
    //     tableRows.append("tData") + i
    //     console.log(x)
    //     // console.log(trID)
    // }
    // console.log(tableRows + i)
    console.log(pixelCan)
    console.log(i)
   
}
// Your code goes here!



