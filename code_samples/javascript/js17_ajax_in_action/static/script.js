window.addEventListener("load", setup);

function setup() {
	document.getElementById("theButton").addEventListener("click", makePost);
	document.getElementById("get_entries").addEventListener("click", getEntries);
}

function getEntries() {
	console.log("get entries");

	var xmlHttp = new XMLHttpRequest();
		
	xmlHttp.onreadystatechange = () => logResponse2(xmlHttp);
	xmlHttp.open("GET", "http://127.0.0.1:5000/items", false); // false for synchronous request
	xmlHttp.send(null);
	return ;
}

function makePost() {
	console.log("creating and sending the post request...");

	let xhr = new XMLHttpRequest();
	if (!xhr) {
		console.log("Could not create an XMLHttpRequest instance");
		return false;
	}
	
	xhr.onreadystatechange = () => logResponse1(xhr);
	
	xhr.open("POST", "/new_item");
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var data = `one=${document.getElementById("a").value}&two=${document.getElementById("b").value}&three=${document.getElementById("c").value}`;
	xhr.send(data);
}

function logResponse1(xhr) {
	console.log(`readyState: ${xhr.readyState}`);
	if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(`status: ${xhr.status}`);
 		if (xhr.status === 200) {
			// debugger;
			console.log("Value sent to server! " + xhr.response);
		} else {
			console.log("There was a problem with the request.");
		}
	}
}

function logResponse2(xhr) {
	console.log(`readyState: ${xhr.readyState}`);
	if (xhr.readyState === XMLHttpRequest.DONE) {
		console.log(`status: ${xhr.status}`);
 		if (xhr.status === 200) {
			// debugger;
			let itemsDivElement = document.getElementById("items");
			let items = JSON.parse(xhr.responseText);
			populateTable(items);
		} else {
			console.log("There was a problem with the request.");
		}
	}
}

function populateTable(items) {
	// <table id="tableId">
	// 	{% for i in items %}
	// 		<tr>
	// 			{% for j in i %}
	// 				<td>{{ j }}</td>
	// 			{% endfor %}
	// 		</tr>
	// 	{% else %}
	// 		<tr><td>Whole lot of nothing!</td></tr>
	// 	{% endfor %}
	// </table>

	let tableElement = document.getElementById("tableId");
	tableElement.innerHTML = "";

	for(let item of items) {
		let trElement = document.createElement("tr");
		for(let datum of item) {
			let tdElement = document.createElement("td");
			tdElement.innerText = datum;
			trElement.append(tdElement);
		}
		tableElement.append(trElement);
	}
}
