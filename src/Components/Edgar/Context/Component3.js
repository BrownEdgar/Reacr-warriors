import React, { Component } from 'react';
import {MyContext2} from './App';
class Component2 extends Component {
	render() { 
		return (
		<div style={{
			border:"2px solid brown",
			width:'200px',
			margin: '50px auto',
			padding: "10px",
			textAlign:'center'
		}}>
		<MyContext2.Consumer>
			{value => <p>{value}</p>}	
		</MyContext2.Consumer>
		</div>
		)
	}
}
 
export default Component2;