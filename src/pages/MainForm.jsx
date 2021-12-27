import React from 'react'
import "../assets/sass/MainForm.scss"
export default function MainForm(props) {
	return (
		<div className="flex">
			<div></div>
			<div className='form_wrapper'>
				<h1>Fine Quality <br />Craftsmanship</h1>
				<form onSubmit={props.handleSubmit}>
					<input 
					type="text" 
					id="name" 
					name="name" 
					placeholder='name'
					value={props.state.name.value}
					onChange={props.handleChange} 
					required />

					<input 
					type="email"
					name="email" 
					id="email"
					placeholder='email'
					value={props.state.email.value}
					onChange={props.handleChange}  
					required />
					<textarea 
					name="message" 
					id="message" 
					onChange={props.handleChange}  
					cols="30" rows="10" 
					placeholder='dectination of job'></textarea>
					<input type="submit" value="get a quote" id="send"/>
				</form>
			</div>
		</div>
	)
}
