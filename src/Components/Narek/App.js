import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
  data:new Date().toLocaleTimeString()

}

start=(action)=>{
	let interval = setInterval(() => {
		this.setState({ data: new Date().toLocaleTimeString() })
	}, 1000);
	if(action === "stop"){
		console.log("Sda");
		clearInterval(interval)
	}
}

render(){
  return (
    <div className='count'>
		<h1>{this.state.data}</h1>
		<button onClick={() => this.start()}>Start</button>
		  <button onClick={() => this.start("stop")}>Stop</button>
    </div>
  )
}
}


