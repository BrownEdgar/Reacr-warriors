import React, {Component} from 'react'
import './App.css';

export default class App extends Component{
state={
arr:['js','py','c++','java']
}

one=(p)=>{
let a=this.state.arr
let b=a.filter((elem,index)=>{
  if(index===p){
    return elem.slice(index,p)
  }
  return index
})
  this.setState({arr:b })
}
render(){
  return (
    <div className='count'>
    {this.state.arr.map((elem,index)=><li key={index}>{elem}  <button onClick={()=>this.one(index)}>X</button></li>)}
  
    </div>
  )
}
}