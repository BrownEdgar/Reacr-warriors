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
		let { data } = this.state;
		data = data.filter(elem => elem.id !== id)
		this.setState({ data })
	}

	deleteHendler = (e) => {
		this.deleteId(2)
		console.log("ok");
	}
	updateHendler = () => {
		let { data } = this.state;
		 data.forEach(elem => {
			if (elem.id === 3) {
				elem.title = "box"
			}
		})
		this.setState({ data })
	
	}

	render() {
		return (
			<div>
				<form onSubmit={this.hendlerSubmit}>
					<input type="number" placeholder='1-200' />
					<button>Get</button>
				</form>
				<pre>{JSON.stringify(this.state.data,null,1)}</pre>
				<button onClick={this.deleteHendler}>Delete</button>
				<button onClick={this.updateHendler}>Update</button>
				
			</div>
		)
	}
}
