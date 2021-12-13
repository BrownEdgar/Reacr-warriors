import React from 'react'

export default function Users_id(props) {
	return (
		<div className='box'>
			{props.users.map(elem =>{
				return (
					<div className='flex' key={elem.id}>
						<p>-Id: {elem.id}</p>
						<p>-Name: {elem.firstname}</p>
						<p>-Age: {elem.age}</p>
						<p>-Salery: {elem.salery}</p>
						<button className='deleter' onClick={() => props.deleter(elem.id)}>X</button>
					</div>
				)
			})}
		</div>
	)
}

