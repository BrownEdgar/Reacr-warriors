import React from 'react'
import "./App.scss"
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as yup from 'yup'
import Radio from './Radio'

const validationSchema = yup.object({
	name: yup.string().required("Required"),
	surname: yup.string().required("Required"),

})

const onSubmit = values => {
	console.log("form data:", values)
}
const initialValues = {
	name: "",
	surname:"",
	coments: ""
}

const valideteComents = (value) => { 
	let error;
	if (!value) {
		error = "Coments is Required!"
	}
	return error;
 }
export default function App() {


	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				validateOnChange={false}
				validateOnBlur={true}
			>
			<Form >
				<div className="form-group">
					<label htmlFor="email">Name</label>
						<Field type="text" id="name" name="name" />
						<ErrorMessage name="name" component="p" />
				</div>
				<div className="form-group">
						<label htmlFor="email">Surname</label>
						<Field type="text" id="surname" name="surname" />
						<ErrorMessage name="surname" component="p" />
				</div>
					<div className="form-group">
						<label htmlFor="email">Coments</label>
						<Field as="textarea" id="coments" name="coments" validate={valideteComents} />
						<ErrorMessage name="coments" component="p" />
					</div>
				<button type="submit">submit</button>
			</Form>
			</Formik>
			<Radio/>
		</div>
	)
}
