function main() {
	wasm_dubsum("wa03_stack", 5, 10);
	wasm_dubsum("wa04_named", 5, 10);
	wasm_dubsum("wa05_s_expr", 5, 10);
}

function wasm_dubsum(ex, a, b) {
	let importObject = {};
	fetch(`/static/${ex}.wasm`).then(response => {
			return response.arrayBuffer()
		})
		.then(bytes => {
			return WebAssembly.instantiate(bytes, importObject)
		})
		.then(obj => {
			console.log(`dubsum(${a}, ${b}) is:`);
			console.log(obj.instance.exports.dubsum(a, b));
			console.log(`Accoring to ${ex}`);
		});
}

window.addEventListener("load", main);

