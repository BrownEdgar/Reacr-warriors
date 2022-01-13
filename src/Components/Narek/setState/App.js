import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
  count:0,
}

plus=()=>{
  let s=this.state.count
  s+=1
  this.setState({count:s})
}
minus=()=>{

  let n=this.state.count
  n--
  this.setState({count:n})
}
clear=()=>{
  let c=this.state.count
  c=0
  this.setState({count:c})
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


