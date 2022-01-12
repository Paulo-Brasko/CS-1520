function main() {
	rust_add(5, 10);
}

function rust_add(a, b) {
	let importObject = {};
	fetch("/static/wa01_adder.wasm").then(response => {
			return response.arrayBuffer()
		})
		.then(bytes => {
			return WebAssembly.instantiate(bytes, importObject)
		})
		.then(obj => {
			console.log("a + b is:");
			console.log(obj.instance.exports.add(a, b));
			console.log("Accoring to Rust");
		});
}

window.addEventListener("load", main);

