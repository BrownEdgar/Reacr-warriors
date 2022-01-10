import React from 'react'
import "./App.scss"
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function App() {
	const onSubmit = values => {
		console.log("form data:", values)
	}
	const initialValues = {
		name: "",
		surname: "",

	}
	const validationSchema = yup.object({
		name: yup.string().required("Required"),
		surname: yup.string().required("Required"),

	})
	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
			{formik => {
					console.log("formik:", formik)
				return (
					<Form >
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<Field type="text" id="name" name="name" />
							<ErrorMessage name="name">
								{(errMsg) => <div>
									<p>{errMsg}</p>
									</div>}
							</ErrorMessage>
						</div>
						<div className="form-group">
							<label htmlFor="email">Surname</label>
							<Field type="text" id="surname" name="surname" />
							<ErrorMessage name="surname" component="p" />
						</div>
						<button type="submit" disabled={!formik.isValid}>submit</button>
					</Form>
				)
			}}
			</Formik>
		</div>
	)
}
