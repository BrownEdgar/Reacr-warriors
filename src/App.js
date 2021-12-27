import React, { useState } from 'react'
import "./assets/sass/App.scss"
import MainForm from './pages/MainForm'


export default function App() {
	const [state, setstate] = useState({
		name: {
			value:"",
			type: "text",
			errorMessage: "name field cannot be blank.",
			placeholder:"name"
		},
		email: {
			value: "",
			type: "email",
			errorMessage: "email field cannot be blank.",
			placeholder:"email",
		},
		message: {
			value: "",
			type: "",
			errorMessage: "description field cannot be blank.",
			placeholder:"dectination of job"
		}
	})
	const handleChange = (e) => {
		let copy = {...state};
		copy[e.target.name].value = e.target.value;
		setstate(copy)
	}
	const handleSubmit = (e) => {
		console.log("ok");
		e.preventDefault()
	  }
	return (
		<div className="container" >
			<MainForm handleSubmit={handleSubmit} handleChange={handleChange} state={state}/>
		</div>
	)
}



