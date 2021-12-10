import React, { Component } from 'react'
import axios from 'axios'
<<<<<<< HEAD
=======
import "./App.css"
>>>>>>> ff2adaa1ac730a5d60eb52cd066b4edcdb82adc2
export default class App extends Component {
	state = {
		data: [],
		payload: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
	}

<<<<<<< HEAD
	getdata = () => { 
		axios.delete('https://jsonplaceholder.typicode.com/todos/1', )
			.then(newData => {
					console.log(newData);
=======
	getdata = (id) => { 
		axios(`https://jsonplaceholder.typicode.com/todos/?_limit=${id}`, )
			.then(newData => {
				this.setState({ data: newData.data });
>>>>>>> ff2adaa1ac730a5d60eb52cd066b4edcdb82adc2
				}).catch(err => {
				console.log(err);
				this.setState({ error: "someting is wrong" })
			})
	 }
<<<<<<< HEAD
	render() {
		return (
			<div>
				{this.state.data.map(elem => {
					return <p key={elem.id}>{elem.title}</p>
				})}

				<button onClick={this.getdata}>get data</button>
=======

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
>>>>>>> ff2adaa1ac730a5d60eb52cd066b4edcdb82adc2

			</div>
		)
	}
}
