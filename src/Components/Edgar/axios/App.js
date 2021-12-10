import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
	state = {
		data: [],
		payload: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
	}

	getdata = () => { 
		axios.delete('https://jsonplaceholder.typicode.com/todos/1', )
			.then(newData => {
					console.log(newData);
				}).catch(err => {
				console.log(err);
				this.setState({ error: "someting is wrong" })
			})
	 }
	render() {
		return (
			<div>
				{this.state.data.map(elem => {
					return <p key={elem.id}>{elem.title}</p>
				})}

				<button onClick={this.getdata}>get data</button>

			</div>
		)
	}
}
