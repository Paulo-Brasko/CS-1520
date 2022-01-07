mod utils;

// Just the Rust HashMap
use std::collections::HashMap;

// Bring in the prelude for wasm_bindgen
// All of the basics needed to use wasm_bindgen
// E.g., the Rust prelude brings things like std::Result into the namespace
use wasm_bindgen::prelude::*;

// SERialization/DEserialization library traits
// We'll let it derive implementations for our struct automatically
use serde::{Serialize, Deserialize};

// Expose a single JS function to be called from Rust
#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

// Expose a single Rust function to be called from JS
#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wa07-wasm-pack!");
}

// Let's send some complex data back and forth
#[derive(Serialize, Deserialize)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}

// Create data in Rust and send it to JS
#[wasm_bindgen]
pub fn get_from_rust_to_js() -> JsValue {
    let mut field1 = HashMap::new();
    field1.insert(0, String::from("ex"));
    let example = Example {
        field1,
        field2: vec![vec![1.0, 2.0], vec![3.0, 4.0]],
        field3: [1.0, 2.0, 3.0, 4.0]
    };

	// `.unwrap()` is a Result method, returns the value of an Ok variant,
	// Panics if the Result is an Err
    JsValue::from_serde(&example).unwrap()
}

// Recieve data from JS and process it in Rust
#[wasm_bindgen]
pub fn send_to_rust_from_js(val: &JsValue) {
	// Use of the "turbofish" operator ::<type>
	// Described in Table B-4 here:
	// https://doc.rust-lang.org/stable/book/appendix-02-operators.html
	match val.into_serde::<Example>() {
		Ok(mut v) => {
			v.field1.insert(1, String::from("Another example string"));
			web_sys::console::log_2(&"Modified Example in Rust".into(), &JsValue::from_serde(&v).unwrap());
		},
		Err(_) => web_sys::console::log_2(&"Could not parse this as an Example:".into(), val)
	}
}
