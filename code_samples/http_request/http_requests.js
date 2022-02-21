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
    // issuing an HTTP Get request
    const blogs = httpGetRequest(blogURL);
    console.log(blogs);

    // getting a hold on the div to be used to populate the page with the blogs
    let displayDivElement = document.getElementById("displayDivId");
    displayDivElement.innerHTML = "";

    // looping over all the blogs and creating the necessary HTML elements
    for (let blog of blogs) {
        let titleElement = document.createElement("h2");
        titleElement.innerText = `${blog.id} - Title: ${blog.title}`;

        const authorElement = document.createElement("h3");
        authorElement.innerText = `Author: ${blog.author}`;

        const breakElement = document.createElement("br");

        displayDivElement.append(titleElement);
        displayDivElement.append(authorElement);
        displayDivElement.append(breakElement);
    }
}

function retrieveAndDisplayOneBlogEntry() {
    // getting a hold on the blogNumber input element
    const blogNumberElement = document.getElementById("blogNumberTextInput");
    const blogNumber = blogNumberElement.value;

    // issuing an HTTP Get Request with "/blogNumber" added to the blogURL
    const blog = httpGetRequest(`${blogURL}/${blogNumber}`);

    // creating the necessary HTML elements to display the blog on the page
    let titleElement = document.createElement("h2");
    titleElement.innerText = `Title: ${blog.title}`;

    const authorElement = document.createElement("h3");
    authorElement.innerText = `Author: ${blog.author}`;

    const blogContentElement = document.createElement("p");
    blogContentElement.innerText = `${blog.body}`;

    const breakElement = document.createElement("br");

    // adding the blog elements into the single blog div placeholder on the page
    let displayDivElement = document.getElementById("displayDivId");
    displayDivElement.innerHTML = "";
    displayDivElement.append(titleElement);
    displayDivElement.append(authorElement);
    displayDivElement.append(blogContentElement);
    displayDivElement.append(breakElement);
}

function addOneBlogEntry() {
    // getting a hold on the blog elements title, author, and body from the page
    const newBlogTitleElement = document.getElementById("insertNewBlogTitleTextInput");
    const newBlogAuthorElement = document.getElementById("insertNewBlogAuthorTextInput");
    const newBlogBodyElement = document.getElementById("insertNewBlogBodyTextInput");

    // creating a blog object
    let newBlog = {};
    newBlog["title"] = `${newBlogTitleElement.value}`;
    newBlog["author"] = `${newBlogAuthorElement.value}`;
    newBlog["body"] = `${newBlogBodyElement.value}`;

    // issuing an HTTP Post Request
    httpPostRequest(blogURL, newBlog);

    let displayDivElement = document.getElementById("displayDivId");
    displayDivElement.innerHTML = "";
}

function changeExistingBlog() {
    // getting a hold on the blog number to be updated
    let changeExistingBlogNumberTextInput = document.getElementById("changeExistingBlogNumberTextInput");
    let existingBlogNumber = changeExistingBlogNumberTextInput.value;

    // getting a hold on the contents of the updated blog from the page
    let changeExistingBlogTitleTextInput = document.getElementById("changeExistingBlogTitleTextInput");
    let changeExistingBlogAuthorTextInput = document.getElementById("changeExistingBlogAuthorTextInput");
    let changeExistingBlogBodyTextInput = document.getElementById("changeExistingBlogBodyTextInput");

    // creating the blog that will replace the contents of a previously stored blog
    let updatedBlog = {};
    updatedBlog["title"] = `${changeExistingBlogTitleTextInput.value}`;
    updatedBlog["author"] = `${changeExistingBlogAuthorTextInput.value}`;
    updatedBlog["body"] = `${changeExistingBlogBodyTextInput.value}`;

    // issuing an HTTP PUT request
    httpPutRequest(`${blogURL}/${existingBlogNumber}`, updatedBlog);

    let displayDivElement = document.getElementById("displayDivId");
    displayDivElement.innerHTML = "";
}

function deleteExistingBlog() {
    let deleteExistingBlogNumberTextInput = document.getElementById("deleteExistingBlogNumberTextInput");
    let existingBlogNumber = deleteExistingBlogNumberTextInput.value;

    httpDeleteRequest(`${blogURL}/${existingBlogNumber}`);

    let displayDivElement = document.getElementById("displayDivId");
    displayDivElement.innerHTML = "";
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

