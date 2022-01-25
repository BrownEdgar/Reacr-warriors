import React from 'react';
import {useParams} from 'react-router-dom'

function SpecialPages(props) {
const {id} = useParams()
console.log(id);
  return (
    <div>
      <h1>About {id} </h1>
      <div className='row'>
        <div className = "col s6">1</div>
        <div className = "col s6">2</div>
      </div>
    </div>
  )
}

export default SpecialPages
