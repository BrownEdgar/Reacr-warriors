import React from 'react'
import "./App.scss"
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
	
	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	password: yup.string().required("Required"),
})


export default function App() {
	const formik = useFormik({
		initialValues: {
			email: "nikogosjanedgar@gmail.com",
			password: ""
		},
		onSubmit: values => {
			console.log(values)
		},
		validationSchema
		// validate: values => {
		// 	let errors = {};
		// 	if (!errors.email) {
		// 		errors.email = "Required"
		// 	}
		// 	if (!errors.password) {
		// 		errors.password = "Required"
		// 	}

		// 	return errors;
		// }
	})

	return (
		<div className='container'>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						// value={formik.values.email}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps("email")}
					/>
					{formik.errors.email && formik.touched.email  ? <div className="errors">{formik.errors.email}</div> : null}
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.password && formik.touched.password ? <div className="errors">{formik.errors.password}</div> : null} `
				</div>
				<button type="submit">submit</button>
			</form>
		</div>
	)
}
