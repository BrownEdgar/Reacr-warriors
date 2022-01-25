import React, { useState }from "react";
import "./App.css";

const App = () => {
   const pur = "blue";
   const [bg, setBg] = useState(pur);

    const bkChange = () => {
    let newBg = "gray";
    setBg(newBg) 
    };

    const blChange = () => {
        let newBgn = "blue";
        setBg(newBgn) 
        };
   
    const yeChange = () => {
        let newBgn = "yellow";
        setBg(newBgn) 
        };
        
    return (
    
       <div style={{backgroundColor: bg}}>
          <h1>Background is {bg}</h1>
           <h1>React events(change background)</h1>
           <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis quam iste eum dolores, nulla aliquid, ab enim natus, veritatis nesciunt voluptatibus suscipit animi est quisquam harum recusandae neque pariatur.</h5>
           <button onClick={bkChange}>Gray</button>
           <button onClick={blChange}>BLUE</button>
           <button onClick={yeChange}>YELLOW</button>

       </div>
   )
}

export default App;