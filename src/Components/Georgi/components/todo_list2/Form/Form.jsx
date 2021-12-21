import React from 'react'
import style from './Form.module.css'

export default function Form(props) {
	
	const clickSubmit = (e) => {
		e.preventDefault()
		props.addNewTask(e.target[0].value)
		e.target[0].value = ''
	}

	return (
		<div>
			<h1 className='container center-align'> <span>To-Do</span><span className={style.listtt}>List</span></h1>
		<div className="container">
			<form className="col s12" onSubmit={clickSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<i className="material-icons prefix">mode_edit</i>
						<input id="last_name" type="text" className="validate" required/>
						<label htmlFor="last_name">So as not to forget</label>
					</div>
				</div>
			</form>
		</div>
		</div>
	)
}
