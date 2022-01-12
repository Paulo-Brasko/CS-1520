import init, { greet, get_from_rust_to_js, send_to_rust_from_js } from './wa07_wasm_pack.js';
// init is the default export of wa07, hence it is outside of the {}

async function run() {
	await init();
	greet("Hello from JS!");

	const from_rust = get_from_rust_to_js();
	console.log(from_rust);

	const js_ex = {
		"field1": {0: "js demo"},
		"field2": [[6.0, 7.0], [8.0, 9.0]],
		"field3": [5.0, 6.0, 7.0, 8.0]
	};

	send_to_rust_from_js(js_ex);
}

function main() {
	run();
}

window.addEventListener("load", main);

