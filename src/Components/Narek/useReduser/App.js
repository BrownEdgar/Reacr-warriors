import { useEffect, useReducer, useState } from "react";
import "./app.css";

export default function App() {
  const num=[1,2,4,5,6]
 let [a,seta]=useState(num)
 let [c,setc]=useState(0)

const  [state,dispatch]=useReducer(render,num)
function render(state,action){
 switch (action.type) {
   case 'one':
     return sum(state)
     break;
   case 'two':
    return res(state)
    break;
   default:
     return state
     break;
 }
}
function sum(state){
const s=state.reduce((a,b)=> a+b)
return s
}
function res(state){
  console.log(state)
  return a
}
useEffect(()=>{
return setc(c++)
},[state])

  return (
    <div className="App">
      <h1>{state}</h1>
      <p>{c++}</p>
     <button onClick={()=>dispatch({type:'one'})}>sum</button>
     <button onClick={()=>dispatch({type:'two'})}>res</button>

    </div>
  );
}