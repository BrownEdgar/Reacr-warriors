import React from 'react'

 function Child(props) {
	 console.log(props.children)
	return (
		<div>
			{props.children}
		</div>
	)
}
export default Child