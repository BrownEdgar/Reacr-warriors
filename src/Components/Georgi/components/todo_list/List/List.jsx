import React from 'react'
import style from './List.module.css'


export default function List(props) {

	return (
		<div className='container'>
			<ul>
					{props.data.length 
					? props.data.map((elem, index) => 
					<div className={style.dsa}>
						<p className={style.index_name}>{index + 1}</p>
						<li className={style.list} key={index}>{elem}   
						<i className="material-icons " onClick={() => props.deleteitem(index)}>clear </i></li>
					</div>)
					: <h5 className='center-align'>No Tasks Yet</h5>}
			</ul>
		</div>
	)
}