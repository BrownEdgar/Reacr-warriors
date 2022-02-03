import {useState,useEffect,useRef} from "react"
import "./App.css";
import audio from "./NEFFEX - Destiny.mp3"


export default function App() {
  const [text,settext]=useState([])

  const ref=useRef(null)

/*
const pause=()=>{
ref.current.pause();
console.log(4)
}
*/
  const abc=(e)=>{
    e.preventDefault()
    t(e.target[0].value)
    e.target[0].value=""
  }
 const t=(data)=>{
   settext([...text,data])
}
  console.log(text)
  const clear=()=>{
   settext(text.slice(0,...text))
  }
  const func=(id)=>{
    let a=text.slice()
    a.splice(id,1)
    settext(a)
  }

  useEffect(()=>{
    ref.current.play()
  
  },[abc]);
return (
<div className="App">
  <audio src={audio}  ref={ref}/>
  <form onSubmit={abc}>
    <input type='text' required/>
 </form>
   {text.map((elem,index)=><p key={index}>{elem} <button className="X"
   onClick={()=>func(index)}>X</button> </p>)}
   <button className="clear" onClick={clear}>Clear</button>
</div>
  );
}