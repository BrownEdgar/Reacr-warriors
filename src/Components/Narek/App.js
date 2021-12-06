import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
  count:0,
}

plus=()=>{
	this.setState({ count: this.state.count + 1 })
}
minus=()=>{
	this.setState({count:this.state.count - 1})
}
clear=()=>{
	this.setState({count: 0})
}
render(){
  return (
    <div className='count'>
     <h1>{this.state.count}</h1>
     <button onClick={this.plus}>+</button>
     <button onClick={this.minus}>-</button>
     <button onClick={this.clear}>c</button>
    </div>
  )
}
}


