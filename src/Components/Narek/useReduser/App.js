<<<<<<< HEAD
import React,{useReducer} from 'react'

function reducer(state,action){
    console.log(action)
switch (action.type) {
    case 'array':
        console.log('array')
        break;
    case 'arr':
         console.log('arr')
         break;
     default:
        break;
   }
}
export default function App() {
    const [state, dispatch] = useReducer(reducer, [1,5,6,4,7,8]);
    return (
        <div>
<button onClick={() => dispatch({type: 'array'})}></button>
<button onClick={() => dispatch({type: 'arr'})}></button>    
        </div>
    )
}
=======
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
>>>>>>> 16a1f928cc2c4414790f47994d09cba67d9db3d8
