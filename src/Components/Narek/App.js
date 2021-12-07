import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
  arr:['html','css','js','c++','python','c']
}


render(){
  return (
  {this.state.arr.map((elem,index)=><li>elem</li>)}
  )
}
}


