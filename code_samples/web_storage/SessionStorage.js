var inputKey;
var inputValue;
var buttonInsertLocal;
var buttonInsertSession;
var deleteKey;
var buttonDeleteStorage;
var buttonDeleteSession;
var outputLocalList;
var outputSessionList;
    
window.onload = (event) => {
    listLocalStorage();
    configureDOMElementReferences();
    configureDOOMElementListeners();
}

configureDOMElementReferences = () => {
    inputKey = document.getElementById("inputKey");
    inputValue = document.getElementById("inputValue");
    buttonInsertLocal = document.getElementById("buttonInsertLocal");
    buttonInsertSession = document.getElementById("buttonInsertSession");

    deleteKey = document.getElementById("deleteKey");
    buttonDeleteStorage = document.getElementById("buttonDeleteStorage");
    buttonDeleteSession = document.getElementById("buttonDeleteSession");
    outputLocalList = document.getElementById("outputLocalList");
    outputSessionList = document.getElementById("outputSessionList");
}

listLocalStorage = function () {
    outputLocalList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        outputLocalList.innerHTML += `${key}: ${value}<br />`;
    }
}

listSessionStorage = function () {

    // initialize the innerHTML of outputSessionList

    // loop over all the sessionStorage data and append to the innerHTML

}

configureDOOMElementListeners = () => {
    buttonInsertLocal.onclick = function () {
        console.log("banana");
        // retrieving and storing the key and value from page the text input fields
        retrieveAndStoreData("local");

        // update the list of local store data in the page
        listLocalStorage();
        listSessionStorage();

        // empty the input fields
        emptyInputFields();
    };

    buttonInsertSession.onclick = function () {
        // retrieving and storing the key and value from page the text input fields
        retrieveAndStoreData("session");

        // update the list of local store data in the page
        listLocalStorage();
        listSessionStorage();

        // empty the input fields
        emptyInputFields();
    };
    buttonDeleteStorage.onclick = function () {
        // retrieve key from HTML input field and delete data from storage
        retrieveAndDeleteData("storage");

        // update the list of local store data in the page
        listLocalStorage();
        listSessionStorage();

        // empty the input field
        deleteKey.value = "";
    };

    buttonDeleteSession.onclick = function () {
        // retrieve key from HTML input field and delete data from storage
        retrieveAndDeleteData("session");

        // update the list of local store data in the page
        listLocalStorage();
        listSessionStorage();

        // empty the input field
        deleteKey.value = "";
    };
}

retrieveAndStoreData = (storageType) => {
    // getting the key and value from the page text input fields

    // if the key and value are not empty proceed storing them

}

retrieveAndDeleteData = (storageType) => {
    // getting the key from the page text input field

    // if the key and value are not empty proceed delete them

}

emptyInputFields = () => {
    inputKey.value = "";
    inputValue.value = "";
}
