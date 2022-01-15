import React,{useState} from 'react';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./app.css";



export default function App() {

 const [state, setstate] = useState({})

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

console.log(state)

function registerHandler( values){
  const data = { ...values, returnSecureToken:true}
  console.log(data)
  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => console.log(response))
    .catch(err => console.error(err))

 }
 function login(){
   const data = { ...state, returnSecureToken:true}
 
   fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
	 		method: "POST",
	 		body: JSON.stringify(data)
		})
	 		.then(response => console.log(response))
	 		.catch(err => console.error(err))
console.log('sign in')
 }



const validationSchema=Yup.object({
email:Yup.string().email('invalide').required('required'),
password:Yup.string().min(8).max(16).required('required'),
//text:Yup.string().min(10).max(50).required('req')
})

const initialValues={
email:'narek@gmail.com',
password:'',

}
const onSubmit=values=>{
	registerHandler(values);
		setstate(values)
}

/*
initialValues:{
email:'Narek-panosyan@mail.ru',
password:''
},
onSubmit:value=>{
  console.log(value)
},
validate:value=>{
let errors={}
if(!formik.password){
errors.password='Required'
}
if(!formik.email){
formik.email='Required'
}
return errors;
}
*/

//console.log(formik.values)
//console.log(formik.touched)


return(
  <div className='App'>
    <Formik 
    initialValues={initialValues}
     onSubmit={onSubmit}
    validationSchema={validationSchema} >
  {formik=>{
    return (
    <Form>
      <Field type='email' name='email'/><br />
      <ErrorMessage name='email' component='p'/>   
     <Field type='password' name='password'/><br />
     <ErrorMessage name='password' component='p'/>
     
    
      <button type='button' disabled={!formik.isValid} onClick={login} >login</button>
      <button type='submit' disabled={!formik.isValid} onClick={registerHandler}>reg</button>
</Form> 
    )
   }}
  </Formik>  
  </div>
 
);
}