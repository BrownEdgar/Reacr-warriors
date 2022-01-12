////////////////////////////////////////////////////////////////////////////////////////////////
//  Այստեղ import արած Կոմպենենտները փողաչինում են․՝
// *Formik - 'div'-ին,որի մեջ ներառված էր "form"-ը (տես հին օրինակը), բոլոր քոնֆիգները տալիս ենք այս թեգի մեջ
// *Form -  "form" թեգին
// *Field -  "input"-ին
// *ErrorMessage -  հին օրինակ 54 տողով գրած "error" լոգիկաըին, իր մեջ կա արդեն ավտոմատ այդ բոլոր ստուգումները
//
////////////////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
import "./App.css"
import { Formik, Form, Field, ErrorMessage, FieldArray,FastField } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
	name: yup.string().required("Required"),
	email: yup.string()
		.email("Invalid Email format")
		.required("Required"),
	lesson: yup.string().required("Required"),
	comments: yup.string().required("Required"),
})
const initialValues = {
	name: "Edgar",
	email: "",
	lesson: "",
	comments: "",
	address: "",
	social: {
		facebook: "",
		vk: ""
	},
	phNumbers: [""]
}

const onSubmit = values => {
	console.log("form data:", values)
}

export default function App() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			validateOnChange={false}
			validateOnBlur={true}
		>
			<Form >
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<Field type="text" id="name" name="name" />
					<ErrorMessage name="name" component="p" />
					{/* {formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null} */}
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<Field type="email" id="email" name="email" />
					<ErrorMessage name="email">
						{errMsg => <div className="error">{errMsg}</div>}
					</ErrorMessage>
				</div>

				<div className="form-control">
					<label htmlFor="lesson">Lesson</label>
					<Field type="text" id="lesson" name="lesson"
					/>
					<ErrorMessage name="lesson" />
				</div>

				{/* textarea */}
				<div className="form-control">
					<label htmlFor="comments">Message</label>
					<Field as="textarea" id="comments" name="comments" />
				</div>

				{/* address */}
				<div className="form-control">
					<label htmlFor="address">Address</label>
					<FastField name="address" >
						{(props) => {
							console.log("Input render")
							const { field, meta } = props;
							return (
								<div className="form-control" {...field}>
									<input id="address" type="text" />
									{meta.touched && meta.error ? <div>{meta.error}</div> : null}
								</div>
							)
						}}
					</FastField>
				</div>

				{/* social */}
				<div className="form-control">
					<label htmlFor="facebook">facebook</label>
					<Field type="text" id="facebook" name="social.facebook" />
				</div>

				<div className="form-control">
					<label htmlFor="vk">Message</label>
					<Field type="text" id="vk" name="social.vk" />
				</div>

				{/* FieldArray */}
				<div className="form-control">
					<label >list of phone numbers</label>
					<FieldArray name="phNumbers">
						{
							(fieldArrayProps) => {
								const { push, remove, form } = fieldArrayProps;
								const { values } = form;
								const { phNumbers } = values;
								console.log(form)
								return (
									<div>
										{
											phNumbers.map((phNumbers, index) => (
												<div key={index}>
													<Field name={`phNumbers[${index}]`} />
													
															<button type="button" onClick={()=> remove(index)}> - </button>
														
													<button type="button" onClick={() => push('')}> + </button>
												</div>
											))
										}
									</div>
								)
							}
						}
					</FieldArray>
				</div>


				<button type="submit">Submit</button>
			</Form>
		</Formik>
	)
}

