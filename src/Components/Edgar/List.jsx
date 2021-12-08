import React from 'react'
import PropTypes from 'prop-types';

export default function List(props) {
	return (
		<div className="flex">
			{ props.users.map(user => {
				return (
					<div className="flex-item" key={user.id}>
						<p>_id:{user.id}</p>
						<p>Name:{user.name}</p>
						<p>age:{user.age}</p>
						<p>selary:{user.selary}</p>
						<button 
						className="deleter"
						onClick={() => props.deleteItem(user.id)}>X</button>
					</div>
				)
			})}
		</div>
	)
}
List.defaultProps = {
	users: [],
	age:25,
}