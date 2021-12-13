import React, { Component } from 'react'
import Card from './Card'


export const CardNumberContext = React.createContext("Deafult ");

export default class App extends Component {
	state = {
		cardNumber: "1054-6840-0015-8745"
	}
	render() {
		return (
			<div>
			
					
					<Card />
			
			
			</div>
		)
	}
}
