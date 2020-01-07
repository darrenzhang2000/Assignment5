var table = document.getElementById("tbl");
var colorSelector = document.getElementById("ColorSelection");
var rows = 0;
var cols = 0;
var color = "red";

// User Story No. 1 - add rows to the grid
function addRow(){
    let newRow = document.createElement("tr");
    for(let i = 0; i < cols; i++){
        let newCol = document.createElement("td");
        newCol.classList.add("NoColor");
        newRow.appendChild(newCol);
    }
    table.appendChild(newRow);
    rows++;
}

// User Story No. 2 - add columns to the grid
function addCol(){
    let rowsArray = Array.from(table.children);
    rowsArray.forEach((row) => {
        let newCell = document.createElement("td");
        newCell.classList.add("NoColor");
        row.appendChild(newCell);
    })
    cols++;
}

// User Story No. 3 - remove rows from the grid
function deleteRow(){
    table.removeChild(table.lastChild);
    rows--;
}

// User Story No. 4 - remove columns from the grid
function deleteCol(){
    rowsArray = table.childNodes;
    for(let i = 0; i < rows.length; i++){
        table.removeChild(rowsArray[i].lastChild);
    }
    cols--;
}

// User Story No. 5 - select a color from a dropdown menu of colors
function updateColor(){
    color = colorSelector.value;
}

// User Story No. 6 - click on a single cell, changing its color to the currently selected color
table.addEventListener('click', function(event) {
    let cell = event.target;
    cell.style.backgroundColor = color;
    if(cell.classList.contains("NoColor")) {
        cell.classList.toggle("NoColor");
    }
})