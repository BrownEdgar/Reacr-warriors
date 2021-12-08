import React, { Component } from 'react'

export default class Form extends Component {
state = {
	title: "React work with Forms",
	value:"react"
}

	handlerSubmit = (e) => {
		e.preventDefault();
		let value = e.target[0].value;
		this.setState({ title:value  });
		e.target[0].value = ""
	}

	handlerChange= (e) => {
		const {value} = e.target;
		this.setState((prevState) => {
			return { value, title: value}
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<form onSubmit={this.handlerSubmit}>
					<input type="text" value={this.state.value} onChange={this.handlerChange}/>
					<button type="submit">change</button>
				</form>
			</div>
		)
	}
}
