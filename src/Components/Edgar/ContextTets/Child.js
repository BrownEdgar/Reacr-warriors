import React from 'react'
import { CardNumberContext } from "./App"
export default function Child() {
	return (
		<div>
			<CardNumberContext.Consumer>
				{(value) => {
					return <p>{value.toString()}</p>
				}}
			</CardNumberContext.Consumer>
		</div>
	)
}
