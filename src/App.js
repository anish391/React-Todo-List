import React, {Component} from 'react';
import './App.css';

const ToDoItem = ({text}) => (
	<li>{text}</li>
);

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			toDos: [],
			newToDo: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		const toDos = [...this.state.toDos, this.state.newToDo];
		this.setState({toDos, newToDo: ''});
	}
	
	render() {
		const {newToDo} = this.state;
		const todos = this.state.toDos.map((todo, index) => (
			<ToDoItem key={index} text={todo}/>	
		));
		
		return (
			<div className="App">
				<h1>Simple Todo App</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						className="todo-input"
						autoComplete="off"
						type="text"
						name="newToDo"
						placeholder="What needs to be done?"
						value={newToDo}
						onChange={(e) => this.setState({[e.target.name]: e.target.value})}
					/>
					<button type="submit" className="save-button">SAVE</button>
				</form>
				<div className="todo-content">
					<ol>
						{todos}
					</ol>
				</div>
			</div>
		);
	}
}

export default App;
