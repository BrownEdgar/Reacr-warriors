import React, { useState, useEffect } from 'react';
import './Formik_part2.scss'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup'
{/* <label>-ը նախատեսված է էլեմենտի կլիքի տարածքը մեծացնելու համար,այսինք կլիք անելով <label>-ի վրա
ձեր կլիքը անդրադառնում է նաև տվյալ էլեմենտի վրա,եթե էլեմենտը գտնվում է թեգի ներսում՝ <label>Click me <Field type="text"></label>
կամ <label>-ի for և էլեմենտի id դաշտերը համընկնում են*/}
function Formik_part2() {

const validationSchema = yup.object({
      email:yup
            .string()
            .email('invalid email format')
            .required("Required"),
      password:yup
            .string()
            .matches(/^[A-Za-z0-9]{8,20}$/g,{message:`invalid 
               password`})
            .required("Required")    
})
const initialValues = {
      email:'example@mail.com',
      password:'',
      message:''
}
const validateComments = (value) => {
      let error = null;
      if (!value || value.length < 20){
          error = "invalid message"
      }
      ;
      return error
} 
const onSubmit = (values) => {
      console.log(values);
}
           
  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={true}
      >
      { ( formik ) => {
          console.log('formik: ',formik);
          return (
          <Form>
          <div className='content'>
            <div className='form_group'>
              <label htmlFor='email'>Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name='email' component='p' />
            </div>
            <div className='form_group'>
              <label htmlFor='password'>Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name='password' component='p' />
            </div>
            <div className='form_group'>
              <label htmlFor='message'>Comments</label>
              <Field as={"textarea"} name="message" id="message"
                validate={validateComments} />
            {/*   <ErrorMessage name='message' component='p' /> */}
            <ErrorMessage name='message'>
                 {errMsg => <p className='error'>{errMsg} </p> }
            </ErrorMessage>
            </div>
            <button type='submit' disabled={!formik.isValid}>Submit</button>
            <button type='button' onClick={ () => console.log(formik.validateField("email"))}>check email</button>
            <button type='button' onClick={() => formik.validateForm()}>check all forms</button> 
          </div>
          </Form>
          )
        } }
      </Formik>
    </div>
  );
}

export default Formik_part2;