# Rust linked-list

Your task is to implement a generic linked list using Rust.  You only have to
implement functionality for the following things:

1. Adding element to the end of a list `append()`

2. Finding the length of the list `length()`

3. Printing the linked list using `println!`

### Hints:
1. I used an `enum` which had a `Cons` and a `Nil`. You should use the `Box<T>`
	smart pointer for this task to allocate values on the heap. You should take a
	look at the link below for more details on this

	<https://doc.rust-lang.org/book/ch15-01-box.html>

1. For implementing the printing I had to write a `Display` trait for the list.
	I've provided some started code for that below which is missing a match
	statement that you have to complete

	<https://doc.rust-lang.org/rust-by-example/flow_control/match.html>

1. For append and length I also had a match but the function headers for those
	can be a bit tricky. Take a look at this example for some hints on ownership
	rules

	<https://github.com/nfarnan/cs1520_examples/blob/main/rust/rs07_ownership/src/main.rs>
