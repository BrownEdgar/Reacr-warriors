import React, { Component } from 'react'
import axios from 'axios'
import "./App.css"
export default class App extends Component {
	state = {
		data: [],
		payload: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
	}

	getdata = (id) => { 
		axios(`https://jsonplaceholder.typicode.com/todos/?_limit=${id}`, )
			.then(newData => {
				this.setState({ data: newData.data });
				}).catch(err => {
				console.log(err);
				this.setState({ error: "someting is wrong" })
			})
	 }

	 handlerSubmit = (e) => {
		e.preventDefault()
		const value = e.target[0].value;
		 this.getdata(value)
	 }
	render() {
		return (
			<div>
				<form onSubmit={this.handlerSubmit}>
					<input type="number" placeholder='1-200'/>
					<input type="submit" />
				</form>
				<pre>{JSON.stringify(this.state.data,null,1)}</pre>

			</div>
		)
	}
}
