import React, { useState, useEffect } from 'react'
import Form from './Form/Form'
import './App.css'
import List from '../todo_list2/List/List'

export default function App() {
	const [data, setdata] = useState(
		localStorage.getItem('list') !== null ? JSON.parse(localStorage.getItem('list')) : []
	)

	const addNewTask = (task) => {
		setdata(prevdata => {
			return [...prevdata,task]
		})
	}

	const deleteItem = (id) => {
		let copy = data.slice()
		copy.splice(id,1)
		setdata([...copy])
	}

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(data))
	 }, [data])

	return (
		<div className='container'>
			<Form addNewTask ={addNewTask}/>
			<List data={data} deleteItem={deleteItem}/>
		</div>
	)
}
