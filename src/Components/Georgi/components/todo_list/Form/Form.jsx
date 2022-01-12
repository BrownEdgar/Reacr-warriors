import React from 'react'

export default function Form(props) {

	const hendlerSubmit = (e) => {
		e.preventDefault();
		props.addNewTask(e.target[0].value)
		e.target[0].value = ''
	}

	return (
		<div className='container'>
			<h1 className='center-align'>Todo <span>List</span></h1>
			<div className="container ">
				<form className="col s12" onSubmit={hendlerSubmit} >
					<div className="row">
						<div className="input-field col s12" >
							<i className="material-icons prefix">mode_edit</i>
							<input id="last_name" type="text" className="validate" required/>
							<label htmlfor="last_name">What your going to do</label>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
