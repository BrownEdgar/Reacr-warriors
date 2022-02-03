import React, { useState } from 'react';
import './List.css'

function List(props) {

  return <div>
           <ul className="collection">
           <li className="collection-header">
           <h4>ToDos</h4></li>
              {props.data.map( (elem,index) => {
                return (
                  <div key={index} className='todo'>
                        <li className="collection-item">
                        {elem}
                        <i className="small material-icons" onClick={
                        () => props.deleteTask(index)
                        }>delete</i>
                        </li>
                    </div>
                )
              } )}
           </ul>
         </div>

}

export default List;
