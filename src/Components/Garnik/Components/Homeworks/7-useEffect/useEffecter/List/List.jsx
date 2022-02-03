import React from 'react';
import s from './List.module.css'

function List(props) {
  return ( <div>
            <ul id={s.List}>
                {props.data.length 
                ? props.data.map( (elem,index) => 
                <li key={index}>
                {elem}
                {/*props֊ով փոխանցում ենք ֆունկցիա որը ստանում է data-ի
                մեջ մտած էլեմենտի ինդեքսը և քանի որ ֆունկցիան ստանում է
                արգումենտ ստեղծում ենք ֆունկցիա որը իր հերթին կանչում է
                կամ վերադարձնում է deleteTask(index) ֆունկցիան */}
                <i className="tiny material-icons" onClick={() => 
                props.deleteTask(index)}>clear</i>
                </li> )
                : <h3 className='center-align'>No taks Yet ☹️</h3>}
            </ul>
           </div> );
}

export default List;
