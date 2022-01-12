<<<<<<< HEAD
import React,{useState} from 'react'

export default function App() {

const [a,seta]=useState(['mek','erku','ereq'])
console.log(a)

const clic=()=>{
  seta(a.concat(['as']))
}
  return (
    <div>
      <h1>{a.join(" ")}</h1>
      <button onClick={clic}>df</button>
    </div>
  )
}
=======
import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
	state = {
		data: null

	}
	
	start = () => {
		let intervalId = setInterval(() => {
			this.setState({ data: new Date().toLocaleTimeString() });
		}, 1000)
		this.setState({ intervalId: intervalId })
	}

	stop = () => clearInterval(this.state.intervalId);

	render() {
		return (
			<div className='count'>
				<h1>{this.state.data}</h1>
				<button onClick={() => this.start()}>Start</button>
				<button onClick={() => this.stop()}>Stop</button>
			</div>
		)
	}
}

>>>>>>> 16a1f928cc2c4414790f47994d09cba67d9db3d8

