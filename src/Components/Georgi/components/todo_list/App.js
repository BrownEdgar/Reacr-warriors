import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Form/Form'
import List from './List/List'


export default function App() {
	const [data, setdata] = useState(
		localStorage.getItem('list') !== null 
		? JSON.parse(localStorage.getItem('list'))
		: []
		)
		const [state, setstate] = useState([0])

	
	const addNewTask = (task) => {
		setdata(prevdata=> {
			return [...prevdata, task]
		})
	}

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(data))
	},[data])

	const deleteitem = (id) => {
		const copy = data.slice()
		copy.splice(id,1)
		setdata(copy)
	}

	return (
		<div className='container'>
			<Form addNewTask={addNewTask}/>
			<List data={data} deleteitem={deleteitem}/>
		</div>
	)
}

