import React from 'react';
import { Formik,Form, useFormik, yupToFormErrors, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./app.css";

const validationSchema=Yup.object({
email:Yup.string().email('invalide').required('required'),
password:Yup.string().min(8).max(16).required('required'),
//text:Yup.string().min(10).max(50).required('req')
})
setstate(initialValues)
const initialValues={
email:'narek@gmail.com',
password:setstate(''),
text:""
}


const onSubmit=value=>{
console.log(value)

}


export default function App() {

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

return (
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
     
     {/*<Field  name="text" as={'textarea'}/><br />
     <ErrorMessage name='text' component='p'/>*/}
      <button type='submit' disabled={!formik.isValid}>submit</button>
</Form> 
    )
   }}
  </Formik>  
  </div>
 
);
}