fn main() {
	let strings = vec![
		String::from("first string"),
		String::from("a"),
		String::from("b"),
		String::from("fourth string"),
		String::from("c"),
	];

	let big_strings: Vec<_> = strings.iter().filter(|x| x.len() > 5).collect();

	println!("Big strings:");
	for s in big_strings.iter() {
		println!("\t{}", s);
	}
	println!("big_strings[0]: {}\n", big_strings[0]);

	let mut little_strings: Vec<_> = strings
		.into_iter()
		.filter(|x| x.len() < 5)
		.collect();

	println!("Little strings:");
	for s in little_strings.iter_mut() {
		s.push('!');
		println!("\t{}", s);
	}
	println!("little_strings[0]: {}\n", little_strings[0]);

	println!("Little strings again:");
	// By default, for uses `.into_iter()`
	for s in little_strings {
		println!("\t{}", s);
	}
	// This will error
	//println!("little_strings[0]: {}", little_strings[0]);

	println!();
	let ints = vec![5, 10, 15, 20, 25, 30];
	for i in ints {
		println!("int: {}", i);
	}
	// Still moved, even though i types implement Copy, Vec<i32> does not
	//println!("first int again: {}", ints[0]);
}
