import React from 'react'
import "./App.scss"
import { useFormik } from 'formik'
import * as yup from 'yup'
const initialValues = {
	email: "nikogosjanedgar@mail.com",
	password: ""
}
const onSubmit =  values => {
	console.log(values);
}
const validationSchema = yup.object({
	email: yup.string().email("Invalid Email format").required("Required"),
	password: yup.string().matches(/^[A-Z][a-z0-9]{8,20}$/g)
})

export default function TestForm() {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,

	}) 
	console.log(formik.touched);
	return (
		<div className='container'>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						name="email" 
						id="email"
						{...formik.getFieldProps("email")} />
					{ formik.errors.email && formik.touched.email 
					? <p className="errors">{formik.errors.email}</p> 
					: null }
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input 
						type="password" 
						name="password" 
						id="password"
						// value={formik.values.email}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps("password")} />
					{formik.errors.password && formik.touched.password
						? <p className="errors">{formik.errors.password}</p>
						: null}
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	)
}
