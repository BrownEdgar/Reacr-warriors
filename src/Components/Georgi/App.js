import React, { Component, createContext } from 'react'
import './App.css';
import Child from "./components/Child"

export default class App extends Component {
	state = {
		count: 0,
	}

	clickPlus = () => {
		let count = this.state.count;
		count += 1;
		this.setState({ count })
	}

	clickMinus = (arg) => {
		let count = this.state.count;
		count += arg
		this.setState({ count })
	}

	clickZero = () => {

		this.setState({ count: 0 })
	}




	clickMinusTen = () => {
		let count = this.state.count;
		count > 10 ? count -= 10 : count = count;
		this.setState({ count })
	}

	clickMinusHundred = () => {
		let count = this.state.count;
		count > 100 ? count -= 100 : count = count;
		this.setState({ count })
	}

	render() {
		const { count } = this.state;
		return (
			<div className="countainer">
				<h1>{count}</h1>
				<div className="btn_box">
					<Child>
						<h1>hello Child</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at culpa, esse, libero excepturi sapiente itaque reprehenderit ipsa eos dolorum pariatur repudiandae? Provident doloremque cum perferendis voluptatibus sapiente doloribus ducimus.</p>
						<h1>sdlajk</h1>
					</Child>
				</div>
			</div>
		)
	}
}



