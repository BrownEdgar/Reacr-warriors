import React from 'react'


function Persons (props) {

  let id1 = Math.trunc(Math.random() * 1000);

    return (
        <div key = {id1}>
            {props.data.map( (elem) => {
             return ( 
                  <div>
                   <li>{Object.values(elem).join(" ")}</li>
                   <button onClick = {props.deleterClick}>X</button>
                  </div>
              )  
            } )}
        </div>
    )
}

export default Persons;
