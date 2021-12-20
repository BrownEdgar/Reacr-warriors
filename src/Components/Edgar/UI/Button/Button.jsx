import React from 'react'
import "./Button.css"
export default function Button(props) {
	return (
		<div className={`btn-wrapper ${props.size}`}>
			<button 
				className={`btn ${props.type ? props.type : "dark"}`}
			onClick={() => props.onClick && props.onClick()}
			>{props.title}</button>
		</div>
	)
}
