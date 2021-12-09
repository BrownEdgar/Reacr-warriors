import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
  data:new Date().toLocaleTimeString()

}
start=()=>{
setInterval(()=>{
  this.setState({data:new Date().toLocaleTimeString()})
},1000)
   
}
stop=()=>{
clearInterval()
}
render(){
  return (
    <div className='count'>
<h1>{this.state.data}</h1>
<button onClick={this.start}>Start</button>
<button onClick={this.stop}>Stop</button>
    </div>
  )
}
}


