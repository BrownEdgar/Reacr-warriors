import {  useState } from 'react';
import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="con1">
       <h1>{ count }</h1>
        <button className="btn1" 
        	onClick={() => setCount(count +1)}>+</button>
        <button className="btn2" 
       		 onClick={() => setCount(count -1)}>-</button>
        <button className="btn3" 
       		 onClick={() => setCount(0)}>Reset</button> 
    </div>
  );
}

export default App
