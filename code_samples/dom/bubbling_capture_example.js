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
    const rows = document.getElementsByTagName("tr");

    // looping over the rows and placing event listeners to them
    for(let row of rows) {
        row.addEventListener("click", changeRowColor);
    }
}

function changeRowColor() {
    console.log("A table row has been clicked");
    
    // getting all the table data (also known as "row cells")
    const children = this.getElementsByTagName("td");

    // loop over the cells and change their background
    ???
}

function addListenerForTheCells() {
    // getting all the table data (cells)
    const cells = ???

    // looping over the cells and add listeners to all of them
    ???
}

function changeCellBackgroundColor() {
    console.log("a cell has been clicked");
    this.style.backgroundColor = "#00ee00";
}