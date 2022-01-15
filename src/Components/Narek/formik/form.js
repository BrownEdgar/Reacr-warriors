import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./app.css";

const validationSchema=Yup.object({
email:Yup.string().email('invalide').required('required').trim(),
password:Yup.string().min(8).max(16).required('required')
})

const initialValues={
email:'narek@gmail.com',
password:''
}
const onSubmit=value=>{
console.log(value)
}
export default function App() {

const formik=useFormik({
initialValues,
onSubmit,
validationSchema
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

})

//console.log(formik.values)
//console.log(formik.touched)
return (
<div className='App'>
    <form  onSubmit={formik.handleSubmit }>
  
      <input type='email'
        name='email' 
        /*
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        */
        {...formik.getFieldProps('email')} /><br />
  {formik.errors.email && formik.touched.email ?<p>{formik.errors.email }</p>:null}
    
    <input type='password'
        name='password'
        /*
         value={formik.values.password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         */
        {...formik.getFieldProps('password')} /><br />
     {formik.errors.password && formik.touched.password?<p>{formik.errors.password}</p>:null}
      <button type='submit' disabled={!formik.isValid}>submit</button>
</form>
  
</div>
);
}