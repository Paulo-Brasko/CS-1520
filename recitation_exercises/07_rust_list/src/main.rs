use std::fmt;

enum List<T>{
 	// write code here
}

impl<T> List<T>{
	// I had three functions here, create (creates empty list), append, length
}

impl<T: fmt::Display> fmt::Display for List<T> {
	fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
		//write code here
	}
}



fn main(){
	//this should run without any errors

	let mut list = List::<i32>::create();
	list.append(10);
	list.append(20);
	list.append(30);
	list.append(40);
	list.append(50);
	println!("{}", list);
	println!("List Lenght :: {}", list.length());
}
