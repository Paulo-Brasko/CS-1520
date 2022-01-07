import React from 'react';
import './App.css';

import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.timeout = 45000;
		this.timerID = null;
		
		this.state = {
			error: null,
			isLoaded: false,
			todos: [],
		};

		this.poller = this.poller.bind(this);
		this.deleter = this.deleter.bind(this);
	}

	componentDidMount() {
		this.poller();
	}

	componentWillUnmount() {
		clearTimeout(this.timerID);
	}

	poller() {
		console.log("Polling for new Todos");
		clearTimeout(this.timerID);
		fetch("http://localhost:5000/todos")
			.then(res => res.json())
			.then(
				(res) => {
					this.setState({ isLoaded: true, error: null, todos: res });
					this.timerID = setTimeout(this.poller, this.timeout);
				},
				(error) => {
					this.setState({ isLoaded: true, error });
				}
			);
	}

	deleter(taskID) {
		console.log(`Deleting ${taskID}...`);
		fetch(`http://localhost:5000/todos/${taskID}`, { method: "delete" })
			.then(
				(res) => {
					console.log(`Deleted ${taskID}: ${res}`);
					this.poller();
				},
				(error) => {
					console.log(`Error deleting ${taskID}: ${error}`);
				}
			);
	}

	render() {
		const { error, isLoaded, todos } = this.state;
		if (error) {
			return <React.Fragment>Table Error: {error.message}</React.Fragment>;
		}
		else if (!isLoaded) {
			return <React.Fragment>Table Loading...</React.Fragment>;
		}
		else {
			return (
			<React.Fragment>
				<Table todos={todos} deleter={this.deleter}/>
				<Form poller={this.poller}/>
			</React.Fragment>
			);
		}
	}
}

export default App;
