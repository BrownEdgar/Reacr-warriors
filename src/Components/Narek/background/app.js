import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

const [state,setstate]=useState()
const [bg,setbg]=useState()

useEffect(() => {
  black()
},[])

const black=()=>{
  setbg('black')
 setstate('black')
}
const blue=()=>{
  setbg('blue')
    setstate('blue')
}
const yellow=()=>{
  setbg('yellowgreen')
    setstate('yellow')
}
  return (
    <div className='text'>
   <h2>background is <span>{state}</span></h2>
   <div className='color' style={{backgroundColor:bg}}>
<h2><span>React event</span>(change background)</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur repellendus magni beatae atque, exercitationem dolore perspiciatis esse sed, aliquam minima eligendi quod ex facere sunt quaerat minus! Accusamus, corporis eum.</p>
<button onClick={black} className='one'>black</button>
<button onClick={blue} className='two'>blue</button>
<button onClick={yellow} className="three">yellow</button>
   </div>
    </div>
  );
}