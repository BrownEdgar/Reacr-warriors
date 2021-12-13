import React, { Component } from 'react'
import axios from 'axios'
import './App.css'


export default class App extends Component {
	state = {
		data : [],
		value: ""
	}

	getData = () => {
		let { value } = this.state;
		axios(`https://jsonplaceholder.typicode.com/todos/?_limit=${value}`)
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


	deleteId = () => {
		let { data, value } = this.state;
		data = data.filter(elem => elem.id !== +value)
		this.setState({ data })
	}


	updateAndDelete = () => {
		let { data, value } = this.state;
		data = data.filter(elem => elem.id !== +value)

		data.forEach(elem => {
			if (elem.id === +value + 1) {
				elem.title = "Update title"
			}
		})
		this.setState({ data })
	}

	updateHendler = () => {
		let { data,value} = this.state;
		 data.forEach(elem => {
			 if (elem.id === +value) {
				elem.title = "box"
			}
		})
		this.setState({ data });
	}

	render() {
		let { data, value } = this.state;
		return (
			<div className='container'>
			
				<form onSubmit={this.hendlerSubmit}>
					<input 
						type="number" 
						placeholder='1-200' 
						value={value} 
						onChange={(e) => {this.setState({ value:e.target.value  })}}/>
				</form>


				<div className="buttons-wrapper">
					<button onClick={this.getData}>Get</button>
					<button onClick={this.deleteId}>Delete</button>
					<button onClick={this.updateHendler}>Update</button>
					<button onClick={this.updateAndDelete}>Delete-Update</button>
				</div>
				<pre>{JSON.stringify(data, null, 1)}</pre>
			
				
			</div>
		)
	}
}
