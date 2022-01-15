import React from 'react'
import './style.scss'
import { Formik,  Form,  Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialValues = {
	email: "",
	password: "",
	message: "",
}
const onSubmit = values => {
	console.log(values);
}
const validationSchema = yup.object({
	email: yup
		.string()
		.email('invalid')
		.required('Required'),
	password: yup
		.string()
		.required()
		.min()
		.max()
		.matches(),
	message: yup
		.string()
		.min(40)
		.required('comment is required')
})

export default function App2() {
	return (
		<div className="container">
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				validateOnChange={false}
				validateOnBlur={false}
			>
				<Form>
					<div className='form-group'>
						<label htmlFor="email">Email</label>
						<Field type='email' name='email' id='email' />
						<ErrorMessage name='email' component='p' />
					</div>
					<div className='form-group'>
						<label htmlFor="password">Password</label>
						<Field type='password' name='password' id='password' />
						<ErrorMessage name='password' component='p' />
					</div>
					<div>
						<label htmlFor="message">Comments</label>
						<Field as={"textarea"} name="message" id="message" />
						<ErrorMessage name='message' component='p' />
					</div>
					<button type='submit'>Submit</button>
				</Form>
			</Formik>
		</div>
	)
}