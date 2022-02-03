import React from 'react';
import './Counter.css'

function Counter(props) {
  return <div className='counter'>
          <h4>The data has changed{props.count}times</h4>
         </div>;
}

export default Counter;
