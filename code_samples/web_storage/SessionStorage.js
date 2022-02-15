
window.onload = (event) => {
    listLocalStorage();
    configureDOMElementReferences();
    configureDOOMElementListeners();
}

configureDOMElementReferences = () => {
    const inputKey = document.getElementById("inputKey");
    const inputValue = document.getElementById("inputValue");
    const buttonInsertLocal = document.getElementById("buttonInsertLocal");
    const buttonInsertSession = document.getElementById("buttonInsertSession");

    const deleteKey = document.getElementById("deleteKey");
    const buttonDeleteStorage = document.getElementById("buttonDeleteStorage");
    const buttonDeleteSession = document.getElementById("buttonDeleteSession");
    const outputLocalList = document.getElementById("outputLocalList");
    const outputSessionList = document.getElementById("outputSessionList");
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
    outputSessionList.innerHTML = "";
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        outputSessionList.innerHTML += `${key}: ${value}<br />`;
    }
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
    const key = inputKey.value;
    const value = inputValue.value;

    // if the key and value are not empty proceed storing them
    if (key && value) {
        if (storageType === "local") {
            localStorage.setItem(key, value);
        } else {
            sessionStorage.setItem(key, value);
        }
    }
}

retrieveAndDeleteData = (storageType) => {
    const key = deleteKey.value;
    if (key) {
        if (storageType === "local") {
            localStorage.removeItem(key);
        } else {
            sessionStorage.removeItem(key);
        }
    }
}

emptyInputFields = () => {
    inputKey.value = "";
    inputValue.value = "";
}
