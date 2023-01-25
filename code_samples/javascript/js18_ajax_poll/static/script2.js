let timeoutID;
let timeout = 15000;

window.addEventListener("load", setup);

function setup() {
	document.getElementById("theButton").addEventListener("click", makePost);
	timeoutID = window.setTimeout(poller, timeout);
}

function makePost() {
	console.log("Sending POST request");
	const one = document.getElementById("a").value
	const two = document.getElementById("b").value
	const three = document.getElementById("c").value
	
	fetch("/new_item", {
			method: "post",
			headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
			body: `one=${one}&two=${two}&three=${three}`
		})
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			updateTable(result);
			clearInput();
		})
		.catch(() => {
			console.log("Error posting new items!");
		});
}

function poller() {
	console.log("Polling for new items");
	fetch("/items")
		.then((response) => {
			return response.json();
		})
		.then((results) => updateTable(results))
		.catch(() => {
			console.log("Error fetching items!");
		});
}

function updateTable(result) {
	console.log("Updating the table");

	// deleting table original contents
	const table = document.getElementById("theTable");
	while (table.rows.length > 0) {
		table.deleteRow(0);
	}
	
	// add the up-to-date table contents sent from server
	for (var i = 0; i < result.length; i++) {
		addRow(result[i]);
	}
	
	timeoutID = window.setTimeout(poller, timeout);
}

function addRow(row) {
	const tableRef = document.getElementById("theTable");
	const newRow = tableRef.insertRow();

	for (var i = 0; i < row.length; i++) {   // row = [value1, value2, value3]
		const newCell = newRow.insertCell();
		const newText = document.createTextNode(row[i]);
		newCell.appendChild(newText);
	}
}

function clearInput() {
	console.log("Clearing input");
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
}


