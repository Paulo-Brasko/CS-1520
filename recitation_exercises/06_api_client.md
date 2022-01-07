# Building a client web app

Refer to the the example `fl13_api`. Modify `api_ex.py` to server a client web
app on the `/` route. This web app should support the following functionality:

* Display all of the Todo items in a table
* Provide a button to delete any Todo item
* Use `fetch` to poll for Todos from the server every 10s
* Provide a form for the user to enter new Todo items
* Use `fetch` to send these new Todo items to the server
