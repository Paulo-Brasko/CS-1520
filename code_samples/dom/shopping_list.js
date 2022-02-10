// Run setup after page had loaded
window.addEventListener("load", addListeners);

// add listeners to the buttons
function addListeners() {
    document.getElementById("addNewItemButton").addEventListener("click", addNewItem);
    document.getElementById("deleteSelectedItemsButton").addEventListener("click", deleteSelectedItems);
    document.getElementById("selectAllItemsButton").addEventListener("click", selectAllItems);
}

// create a input text field and an associate button to enter new item into the shopping list
function addNewItem() {
    // the structure will be
    // <div>
    //    <text field> <button>

    // creating the div element
    const divElement = document.createElement("div");

    // creating the input text element
    const inputTextElement = document.createElement("input");
    inputTextElement.setAttribute("type", "text");
    inputTextElement.setAttribute("size", 40);
    inputTextElement.setAttribute("id", "newItemDescription");

    // creating a button to add the new shopping item into the list the text entered
    const addNewButton = document.createElement("input");
    addNewButton.setAttribute("type", "button");
    addNewButton.setAttribute("id", "addNewButtonID");
    addNewButton.setAttribute("value", "Add New Item");
    addNewButton.addEventListener("click", updateList);

    // appending elements into the DOM under the already existing <div> (see HTML file) 
    const itemListDiv = document.getElementById("inputForNewItem");
    itemListDiv.appendChild(inputTextElement);
    itemListDiv.appendChild(addNewButton);
}

function updateList() {
    // each item to be place in the shopping list have the following structure
    // <div>
    //    <checkbox> <label>

    // creating the <div> element
    const divElement = document.createElement("div");

    // creating the checkbox
    const listItemCheckBoxElement = document.createElement("input");
    listItemCheckBoxElement.setAttribute("type", "checkbox");
    listItemCheckBoxElement.setAttribute("name", "checkBoxName");  // needed for the label later
    listItemCheckBoxElement.setAttribute("class", "checkBoxClass");

    // create the label that goes with the checkbox
    const checkBoxLabelElement = document.createElement("label");
    checkBoxLabelElement.setAttribute("for","checkBoxName");

    // getting the text that will be placed on the label
    const itemTextDescription = document.getElementById("newItemDescription");
    checkBoxLabelElement.textContent = itemTextDescription.value;

    // place a <br>. It could be done via CSS
    const breakElement = document.createElement("br");

    // appending the new elements into the <div>
    divElement.appendChild(listItemCheckBoxElement);
    divElement.appendChild(checkBoxLabelElement);
    divElement.appendChild(breakElement);

    // appending the new <div> into the existing <div> with id listOfItems
    const listDivElement = document.getElementById("listOfItems");
    listDivElement.appendChild(divElement);

    // removing the input field and the button associated with entering the new item
    const itemListDiv = document.getElementById("inputForNewItem");

    // removing the temporary fields to enter the new data
    itemListDiv.removeChild(itemTextDescription);
    itemListDiv.removeChild(document.getElementById("addNewButtonID"));
}

function selectAllItems() {
    // getting a list of the DOM elements that have class name checkBoxClass
    const checkBoxList = document.getElementsByClassName("checkBoxClass");

    // loop over the list and set the checkbox to true
    for (let i = 0; i < checkBoxList.length; i++) {
        checkBoxList[i].checked = true;
    }
}

function deleteSelectedItems() {
    // getting a list of the DOM elements that have class name checkBoxClass
    const checkBoxList = document.getElementsByClassName("checkBoxClass");

    // looping over the list and removing the parent <div>.
    // by doing so, the checkbox and the associated label are removed
    for (let i = checkBoxList.length-1; i >=0; i--) {
         if (checkBoxList[i].checked === true) {
            checkBoxList[i].parentElement.remove();
        }
    }
}









