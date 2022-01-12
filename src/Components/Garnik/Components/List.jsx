import React from 'react'

export default function List(props) {
    return (
        <div>
          { props.arr.map( (elem,index) => <li key = {index} >{elem}</li>  )  }
          <button onClick = {props.handlerClick}>add elment</button>
        </div>
    )
}
