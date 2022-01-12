import React from 'react';

export default class Form extends React.Component {
	// More on React form handling:
	// https://reactjs.org/docs/forms.html
	constructor(props) {
		super(props);
		this.state = {
			newdo: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(`Sending new Todo(${this.state.newdo})`);
		fetch("http://localhost:5000/todos", {
				method: "post",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({"task": this.state.newdo}),
			})
			.then(res => res.json())
			.then(
				(res) => {
					console.log(`Response: ${res}`);
					this.setState({newdo: ""});
					this.props.poller();
				},
				(error) => {
					console.log(`Error sending todo: ${error}`);
				}
			);
			// Passing onSuccess and onFail to .then() instead of using 
			// .catch() as recommended here:
			// https://reactjs.org/docs/faq-ajax.html
	}

	handleChange(e) {
		this.setState({newdo: e.target.value});
	}

	render() {
		return (
		<React.Fragment>
			<h3> Add new todo: </h3>
			<form name="theForm" onSubmit={this.handleSubmit}>
				<input type="text" id="newDo" name="" value={this.state.newdo} onChange={this.handleChange} />
				<input type="submit" id="theButton" value="Add" />
			</form>		
		</React.Fragment>
		);
	}
}

