window.addEventListener("load", main);

var blogURL = new URL("http://localhost:8000/blogs");

function addEventListeners() {
    const viewAllBlogsButton = document.getElementById("viewAllBlogEntriesButton");
    viewAllBlogsButton.addEventListener("click", retrieveAndDisplayAllBlogEntries);

    const viewABlogButton = document.getElementById("getOneBlogEntryButton");
    viewABlogButton.addEventListener("click", retrieveAndDisplayOneBlogEntry);

    const addNewBlogButton = document.getElementById("addNewBlogButton");
    addNewBlogButton.addEventListener("click", addOneBlogEntry);

    const changeExistingBlogButton = document.getElementById("changeExistingBlogButton");
    changeExistingBlogButton.addEventListener("click", changeExistingBlog);

    const deleteExistingBlogButton = document.getElementById("deleteExistingBlogButton");
    deleteExistingBlogButton.addEventListener("click", deleteExistingBlog);
}

function retrieveAndDisplayAllBlogEntries() {
    // issuing an HTTP Get request to get all the blogs
 

    // getting a hold on the div to be used to populate the page with the blogs


    // looping over all the blogs and creating the necessary HTML elements

}

function retrieveAndDisplayOneBlogEntry() {
    // getting a hold on the blogNumber input element

    
    // issuing an HTTP Get Request with "/blogNumber" added to the blogURL

    
    // creating the necessary HTML elements to display the blog on the page

}

function addOneBlogEntry() {
    // getting a hold on the blog elements title, author, and body from the page

    
    // creating a blog object

    
    // issuing an HTTP Post Request

    
    // emptying the display area


}

function changeExistingBlog() {
    // getting a hold on the blog number to be updated

    
    // getting a hold on the contents of the updated blog from the page

    
    // creating the blog that will replace the contents of a previously stored blog

    
    // issuing an HTTP PUT request
    

    // emptying the display area

}

function deleteExistingBlog() {
    // getting the number of the blog to be deleted

    
    // issuing a delete request for that given blog number

    
    // emptying the display area

}

function httpGetRequest(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function httpPostRequest(theUrl, newBlog) {
    // creating the HTTP request and posting it     
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, false); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/json');
    xmlHttp.send(JSON.stringify(newBlog));
}

function httpPutRequest(theUrl, updatedBlog, blogNumber) {
    // creating the HTTP request and posting it     
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", theUrl, false); // false for synchronous request
    xmlHttp.setRequestHeader('Content-type', 'application/json');
    xmlHttp.send(JSON.stringify(updatedBlog));
}

function httpDeleteRequest(theUrl) {
    // creating the HTTP request and posting it     
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
}

function main() {
    addEventListeners();
}

