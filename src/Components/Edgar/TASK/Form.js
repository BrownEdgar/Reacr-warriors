import React from 'react'

export default function Form(props) {
	const handlerSubmit = (e) => { 
		e.preventDefault()
		console.log(e);
		props.addNewTask(e.target[0].value);
		e.target[0].value = ""
	}
	return (
		<div className="row ">
			<form className="col s12" onSubmit={handlerSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<i className="material-icons prefix">mode_edit</i>
						<input placeholder="ex. clean the room" id="add_task" type="text" className="validate" required />
						<span className="helper-text" data-error="wrong" data-success="right" >Helper text</span>
						<label htmlFor="add_task">Add your task</label>
					</div>
				</div>
			</form>
		</div>
	)
}
