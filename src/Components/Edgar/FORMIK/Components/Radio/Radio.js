import React from 'react';
import { Formik, Field, Form } from 'formik';



export default function Radio() {
	return (
		<div>
			<Formik
				initialValues={{
					picked: '',
					toggle: false,
					checked: ["One", "Two"],
					colors: ""
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ values }) => (
					<Form>
						<h4>Radio buttons</h4>
						<div id="my-radio-group">Picked</div>
						<div role="group" aria-labelledby="my-radio-group">
							<label>
								<Field type="radio" name="picked" value="One" />
								One
							</label>
							<label>
								<Field type="radio" name="picked" value="Two" />
								Two
							</label>
							<p>Picked: {values.picked}</p>
						</div>
						<h4>Checkboxes</h4>
						<label>
							<Field type="checkbox" name="toggle" />
							{`${values.toggle}`}
						</label>

						<div id="checkbox-group">Checked</div>
						<div role="group" aria-labelledby="checkbox-group">
							<label>
								<Field type="checkbox" name="checked" value="One" />
								One
							</label>
							<label>
								<Field type="checkbox" name="checked" value="Two" />
								Two
							</label>
							<label>
								<Field type="checkbox" name="checked" value="Three" />
								Three
							</label>
						</div>
						<div className='select-group'>
							<h4>Selects</h4>
							<label>
								<Field name="colors" as="select" className="my-select">
									<option value=""></option>
									<option value="red">Red</option>
									<option value="green">Green</option>
									<option value="blue" >Blue</option>
								</Field>
							</label>

							<label htmlFor="location">Where do you work?</label>
							<Field
								component="select"
								id="location"
								name="location"
								multiple={true}
							>
								<option value="NY">New York</option>
								<option value="SF">San Francisco</option>
								<option value="CH">Chicago</option>
								<option value="OTHER">Other</option>
							</Field>
						</div>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

