import React,{ useState } from 'react'
import './FireBase.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { REACT_APP_FIREBASE_KEY } from '../../../env.json'

const API_KEY = REACT_APP_FIREBASE_KEY

function FireBase() {

const [state,setState] = useState({}) 
  
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('invalid email format')
      .required("Required"),
    password: yup
      .string()
      .matches(/^[A-Za-z0-9]{8,20}$/g, {
        message: `invalid 
             password`})
      .required("Required")
  })
  const initialValues = {
    email: 'example@mail.com',
    password: '7KzHjI8m',
  }
  const onSubmit = (values) => {
        registerHandler(values);
        setState(values);
        console.log(values);
  }

  console.log("state",state);

  function registerHandler () {
    console.log("regist function");
    const data = {...state,returnSecureToken:true}
    let apiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    fetch(apiUrl, {
         method:"POST",
         body:JSON.stringify(data)
    })
    .then( res => console.log(res) )
    .catch( err => console.log(err) )

}

function loginHandler () {
    console.log("login function");
    const data = {...state,returnSecureToken:true}
    let apiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    fetch(apiUrl, {
         method:"POST",
         body:JSON.stringify(data)
    })
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
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
{(formik) => {
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

             <div className='flex'>
              <button
                type='button'
                id='Login'
                disabled={!formik.isValid}
                onClick={() => {
                  setState(formik.values)
                  loginHandler()
                }}>
                вход
              </button>
              <button
                type='submit'
                id="Register"
                disabled={!formik.isValid}>
                регистрация
              </button>
            </div>

         </div>
    </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default FireBase