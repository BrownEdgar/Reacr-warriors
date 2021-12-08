import React, { Component } from 'react'
import List from './List'
import "./App.css"


export default class App extends Component {
	state = {
		users: [
			{id:1, name: "Levon", age:30, selary:340_000},
			{id:2, name: "Karine", age:41, selary:140_000},
			{id:3, name: "Satenik", age:24, selary:200_000},
			{id:4, name: "Robert", age:33, selary:500_000},
			{id:5, name: "Georgi", age:28, selary:400_000},
		],
		count:0
	}


	deleteItem = (id) => { //2
		let users = [...this.state.users];
		users= users.filter(elem => elem.id !== id);
		this.setState({ users });
	 }
	plus = () => { 
			setInterval(() => {
				this.setState({ count: this.state.count + 1 });
			}, 1000)
	}
	render() {
		return (
			<div className="container">
				<h1>{this.state.count}</h1>
				<button onClick={this.plus}>+</button>
				<List users={this.state.users} deleteItem={this.deleteItem}/>
			</div>
		)
	}
}
