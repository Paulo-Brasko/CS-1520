
window.onload = (event) => {
    listCookieData();
    configureDOMElementReferences();
    configureDOMElementListeners();
}

listCookieData = function () {
    // getting the list of cookie saved data

    // "key1=value1; key2=value2; key3=value3; ..."
    // split the cookie items

    // populate the outputList innerHTML with the list of cookies
    
    
}

configureDOMElementReferences = () => {
    const inputKey = document.getElementById("inputKey");
    const inputValue = document.getElementById("inputValue");
    const buttonInsert = document.getElementById("buttonInsert");
    const deleteKey = document.getElementById("deleteKey");
    const outputList = document.getElementById("outputList");
    const buttonDelete = document.getElementById("buttonDelete");
}


configureDOMElementListeners = () => {
    buttonInsert.onclick = function () {
        // retrieving and storing the key and value from page the text input fields
        retrieveAndCreateCookieData();

        // update the list of local store data in the page
        listCookieData();

        // empty the input fields
        emptyInputFields();
    };

    buttonDelete.onclick = function () {
        // retrieve key from HTML input field and delete data from storage
        retrieveAndDeleteCookieData();

        // update the list of local store data in the page
        listCookieData();

        // empty the input field
        deleteKey.value = "";
    };
}

retrieveAndCreateCookieData = () => {
    // getting the key and value from the page text input fields

    // if the key and value are not empty proceed storing them
}

retrieveAndDeleteCookieData = () => {
    // getting the key and value from the page text input fields

    // if the key and value are not empty proceed delete it
}

emptyInputFields = () => {
    inputKey.value = "";
    inputValue.value = "";
}
