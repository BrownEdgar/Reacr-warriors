import React from 'react'

function Child(props) {

	return (
		<div>
			{props.isShow && <h1>title</h1>}
			<button onClick={props.myFunction}>add element</button>
		</div>
	)
}
export default Child