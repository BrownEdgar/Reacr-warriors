import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [state, setstate] = useState(['a', 'b', 'c', 'd',"e","f"])
	const [number, setnumber] = useState([1,2,3,4])

	const deleteItem = () => {
		const newstate = state
		return (
				<h1>{setstate(newstate.splice(Math.floor(Math.random() * newstate.length - 1), Math.floor(Math.random() * newstate.length)))}</h1>
		)
	}

	const plusItems = () => {
		const newnumber = number
		return (
					<h1>{setnumber(newnumber.reduce((a,b) => a + b ))}</h1>
		)
	}

	const multiplyItems = () => {
		const newnumber = number
		setnumber(newnumber.map((elem) => elem * 2))
	}

	const toLocalStorage = () => {
		const storage = state
		localStorage.setItem('Arrey', JSON.stringify(storage))
	}

	const shufflelItems = () => {
		const newsdeck = state.sort(() => Math.floor(Math.random() - 0.5));
		console.log(newsdeck);
		setstate([...newsdeck])
	}

	return (
		<div className='container'>
			<h1>{state}</h1>
			<h1>{number}</h1>
			<button onClick={deleteItem}>Random Delete</button>
			<button onClick={shufflelItems}>Shuffle</button>
			<button onClick={plusItems}>All +</button>
			<button onClick={multiplyItems}>All *2</button>
			<button onClick={toLocalStorage}>ToLocalStorage</button>
		</div>
	)
}