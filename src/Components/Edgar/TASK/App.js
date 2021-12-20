import React, {useState, useEffect} from 'react'
import Form from './Form'
import List from './Lists/List'

export default function App() {
	const [data, setData] = useState(
		localStorage.getItem("list") !== null 
		? JSON.parse(localStorage.getItem("list")) 
		: []
	)
const [state, setState] = useState([])
	const addNewTask = (task) => {
		setData(prevdata  => {
			return [...prevdata, task]
		})

	}


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => setState(json))
	})

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(data))
	}, [data])



	const deleteTask = (id) => {
		let copy = data.slice();
		copy.splice(id,1)
		setData([...copy])
	}
	return (
		<div className='container'>
			<Form addNewTask={addNewTask}/>
			<List data={data} deleteTask={deleteTask}/>
		</div>
	)
}
