import React,{useState} from 'react'
import "./App.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
const initialValues = {
	email: "nikogosjanedgar@mail.com",
	password: "",
	message: "", 
}
const onSubmit = values => {
	console.log(values);
}
const validationSchema = yup.object({
	email: yup.string().email("Invalid Email format").required("Required"),
	password: yup.string().matches(/^[A-Z][a-z0-9]{8,20}$/g, { message: "Invalid Password" }).required("Required"),
	
})
function validateMessage(value) {
	let error = null;
	if (!value) {
		error = "Invalid Message format"
	}
	return error;
}

export default function TestForm2() {
	return (
		<div className='container'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
				validateOnChange={false}
				validateOnBlur={false}
				>
			 {(formik) => {
				 console.log(formik);
				 return (
					 <Form>
						 <div className="form-group">
							 <label htmlFor="email">Email</label>
							 <Field type="email" name="email" id="email" />
							 <ErrorMessage name="email" component="p" />
						 </div>
						 <div className="form-group">
							 <label htmlFor="password">Password</label>
							 <Field type={"password"} name="password" id="password" />
							 <ErrorMessage name="password" component="p" />
						 </div>
						 <div className="form-group">
							 <label htmlFor="message">Comments</label>
							 <Field as={"textarea"} name="message" id="message" validate={validateMessage} />
							 <ErrorMessage name="message" component="p" />
						 </div>
						 <button type='submit'>submit</button>
					 </Form>
				 )
			 }}
			</Formik>	
		</div>
	)
}
