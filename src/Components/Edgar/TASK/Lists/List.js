import React from 'react'
import s from './List.module.css'
export default function List(props) {
	return (
		<div>
			<ul id={s.list}>
				{props.data.length 
					? props.data.map((elem, index) => (
						<li key={index} >
						{elem}  
							
							<i className=" tiny material-icons waves-effect waves-light deep-orange accent-3" onClick={() => props.deleteTask(index)}>clear</i>
						</li>
					))
				: <h4 className='center-align'>No task Yet 😐</h4> }
			</ul>
		</div>
	)
}
