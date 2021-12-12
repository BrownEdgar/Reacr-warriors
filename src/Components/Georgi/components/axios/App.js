import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component {
	state = {
		data : [],
		title : []
	}



	getData = (id) => {
		axios(`https://jsonplaceholder.typicode.com/todos/?_limit=${id}`)
			.then(newData => {
				this.setState({data : newData.data})
				if(newData.status === 200){
					let { data } = this.state
					data = [...data, ...newData]
					this.setState({ data })
				}
			})
			.catch(err => {
				this.setState({error : "error"})
			})

	}

	hendlerSubmit = (e) => {
		e.preventDefault()
		const value = e.target[0].value;
		this.getData(value)
	}

	deleteId = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/?_limit=${id}`)
			.then(() => this.setState({ status: 'deleted successful'}))
	}

	deleteHendler = (e) => {
		e.preventDefault()
		let {title} = this.state
		title = 
		this.deleteId(value)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.hendlerSubmit}>
					<input type="number" placeholder='1-200' />
					<button>Get</button>
				</form>
				<pre>{JSON.stringify(this.state.data,null,1)}</pre>
				<form onSubmit={this.deleteHendler}>
					<button>Delete</button>
				</form>
			</div>
		)
	}
}
