var table = document.getElementById("tbl");
var rows = 0;
var cols = 0;

// add rows to the grid
function addRow(){
    let newRow = document.createElement("tr");
    for(let i = 0; i < cols; i++){
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    table.appendChild(newRow);
    rows++;
}

// add columns to the grid
function addCol(){
    let rowsArray = Array.from();
    rowsArray.forEach((row) => {
        let newCell = document.createElement("td");
        row.appendChild(newCell);
    })
    cols++;
}

// delete rows
function deleteRow(){
    table.removeChild(table.lastChild);
    rows--;
}

// delete cols
function deleteCol(){
    rowsArray = table.childNodes;
    for(let i = 0; i < rows.length; i++){
        table.removeChild(rowsArray[i].lastChild);
    }
    cols--;
}