import React, { Component } from 'react';
import Component2 from './Component2'
import Component3 from './Component3'

class R_Context extends Component {
	render() { 
		return (
		<div style={{
			border:"2px solid brown",
			width:'300px',
			margin: '150px auto',
			padding: "20px",
			textAlign:'center'
		}}>
		<h1>React Contect()</h1>
		<Component2 />
		<Component3 />
		</div>
		)
	}
}
 
export default R_Context;