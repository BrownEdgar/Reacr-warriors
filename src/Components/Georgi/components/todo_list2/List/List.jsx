import React from 'react'
import style from './List.module.css'

export default function list(props) {

	return (
		<div className='container'>
			<ul>
				{props.data.length
					? props.data.map((elem, index) => 
						<div>
							<p className={style.paragraph}>{index + 1}</p>
							<li key={index} className={style.list}>{elem} <i class="material-icons" onClick={() => props.deleteItem(index)}>clear</i></li>
						</div>
					)
					: <h2 className='center-align'>No Task Yet</h2>
				}
			</ul>
		</div>
	)
}
