window.addEventListener("load", addListeners);

function addListeners() { 
    document.getElementById("addNewItemButton").addEventListener("click", addNewItem);
    document.getElementById("deleteSelectedItemsButton").addEventListener("click", deleteSelectedItems);
    document.getElementById("selectAllItemsButton").addEventListener("click", selectAllItems);
}

// add new item
function addNewItem() {
    const divElement = document.createElement("div");

    const inputTextElement = document.createElement("input");
    inputTextElement.setAttribute("type", "text");
    inputTextElement.setAttribute("size", 40);
    inputTextElement.setAttribute("id", "newItemDescription");

    const addNewButton = document.createElement("input");
    addNewButton.setAttribute("type", "button");
    addNewButton.setAttribute("id", "addNewButtonId");
    addNewButton.setAttribute("value", "Add New Item");
    addNewButton.addEventListener("click", updateList);

    // append those two element into the div
    divElement.appendChild(inputTextElement);
    divElement.appendChild(addNewButton);
    const itemListDiv = document.getElementById("inputForNewItem");
    itemListDiv.appendChild(divElement);
}

function updateList() {
    // create a div
    const divElement = document.createElement("div");

    // create a checkbox
    const listItemChecBoxElement = document.createElement("input");
    listItemChecBoxElement.setAttribute("type", "checkbox");
    listItemChecBoxElement.setAttribute("name", "checkBoxName");
    listItemChecBoxElement.setAttribute("class", "checkBoxClass");

    // create the label
    const checkBoxLabelElement = document.createElement("label");
    checkBoxLabelElement.setAttribute("for", "checkBoxName");

    // get the text of the input field
    const itemTextDescription = document.getElementById("newItemDescription");
    console.log(itemTextDescription);
    checkBoxLabelElement.textContent = itemTextDescription.value;


    // append the new elements into the div
    divElement.appendChild(listItemChecBoxElement);
    divElement.appendChild(checkBoxLabelElement);

    // append this div into the page div
    const pageDiv = document.getElementById("listofItems");
    pageDiv.appendChild(divElement);

    // remove the inputs 
    const itemListDiv = document.getElementById("inputForNewItem");
    const listOfDiv = itemListDiv.getElementsByTagName("div");
    const theDivForInput = listOfDiv[0]; 
    itemListDiv.removeChild(theDivForInput);
}

function deleteSelectedItems() {
    // get dom object
    const checkBoxList = document.getElementsByClassName("checkBoxClass");
    for (let i=checkBoxList.length - 1; i>=0; i--) {
        if (checkBoxList[i].checked) {
            checkBoxList[i].parentElement.remove();
        }
    }
}

function selectAllItems() {
    const checkBoxList = document.getElementsByClassName("checkBoxClass");
    for (let i = 0; i <checkBoxList.length; i++) {
        checkBoxList[i].checked = true;
    }
}





