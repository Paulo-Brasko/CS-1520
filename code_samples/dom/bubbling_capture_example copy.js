window.addEventListener("load", setup);

function setup() {
    addListnerForTheTable();
    addListenerForTheTableBody();
    addListenerForTheRows();
    addListenerForTheCells();
}

function addListnerForTheTable() {
    // getting some DOM elements based on their IDs
    const theTableElement = document.getElementById("theTable");

    // adding event listeners to those elements
    theTableElement.addEventListener("click", tableHasBeenClicked);
}

var onOff = true;
function tableHasBeenClicked() {
    const tableCaption = document.getElementById("tableCaptionId");
    const theTableElement = document.getElementById("theTable");

    console.log("The table has been clicked");
    if (onOff) {
        theTableElement.style.borderColor = "#FF0000";
    } else {
        theTableElement.style.borderColor = "#000000";
    }
    onOff = !onOff;
}

function addListenerForTheTableBody() {
    const theTableBody = document.getElementById("theTableBody");
    theTableBody.addEventListener("click", tableBodyHasBeenSelected);
}

function tableBodyHasBeenSelected() {
    console.log("the table body has been clicked");
}

function addListenerForTheRows() {
    // getting the rows of the table
    const rows = document.getElementById("theTable").getElementsByTagName("tr");

    // looping over the rows and placing event listeners to them
    for (var row of rows) {
        row.addEventListener('click', changeRowColor, true);
        // row.addEventListener('click', changeRowColor, true);
    }
}

function changeRowColor() {
    console.log("A table row has been clicked");
    
    // getting all the row cells
    const children = this.getElementsByTagName("td");

    // loop over the cells and change their background
    for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "#0000ee";
    }
}

function addListenerForTheCells() {
    // getting all the table data (cells)
    const cells = document.getElementById("theTable").getElementsByTagName("td");

    // looping over the cells and add listeners to all of them
    for (var cell of cells) {
        cell.addEventListener('click', changeCellBackgroundColor);
    }
}

function changeCellBackgroundColor() {
    console.log("a cell has been clicked");
    this.style.backgroundColor = "#00ee00";
}

