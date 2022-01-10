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

