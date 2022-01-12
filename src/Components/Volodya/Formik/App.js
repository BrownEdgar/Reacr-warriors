import React from 'react'
import './style.scss'
import {useFormik} from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
	email: yup
		.string()
		.email('incalid')
		.required('Required'),
	password: yup
		.string()
		.required()
		.min()
		.max()
		.matches()
})
const initialValues = {
	email: "volodya@bk.ru",
	password: ""
}
const onSubmit = values => {
	console.log(values);
}

export default function App() {

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema
	})

	return (
		<div className='container'>
			<form onSubmit={formik.handleSubmit}>
				<div className='form-group'>
					<label htmlFor="email">Email</label>
					<imput 
					type='email' 
					name='email' 
					id='email'
					value = {formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur} 
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="password">Password</label>
					<imput
						type='password'
						name='password'
						id='password'
						value = {formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur} 
						/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}