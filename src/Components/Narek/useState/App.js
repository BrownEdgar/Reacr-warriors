import { useState } from "react";
import "./App.css";

export default function App() {

  const arr=[1,2,45,65,98,77,32,5]

  const [array,setarray]=useState(arr)
  const [a,seta]=useState()

 const one=()=>{
  let a=array.map((elem,index)=>elem*2)
  console.log(a)
  setarray(a)
  }
  const res =()=>{
    setarray(arr)
    seta(arr)
  }

const map=()=>{
  let b=array.reduce((a,b)=>a+b)
  seta(b)
  }

const local=()=>{
   localStorage.setItem('arr',array)
}

const c=()=>{
  setarray( arr.sort(()=> 0.6-Math.random()) )  //es ceve internetum em tese
}
  return (
    <div className="App">
      <h1>{array.join(" ")}</h1>
      <h3>gumare:{a}</h3>
    <button onClick={one}>*</button>
    <button onClick={res}>reset</button>
    <button onClick={map}>+</button>
    <button onClick={local}>local</button>
    <button onClick={c}>C</button>
    <hr/>
    </div>
  );
}