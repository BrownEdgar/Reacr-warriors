import React, { useState, useEffect } from 'react';
import './Formik_part1.scss'
import { useFormik } from 'formik'
import * as yup from 'yup'
{/* <label>-ը նախատեսված է էլեմենտի կլիքի տարածքը մեծացնելու համար,այսինք կլիք անելով <label>-ի վրա
ձեր կլիքը անդրադառնում է նաև տվյալ էլեմենտի վրա,եթե էլեմենտը գտնվում է թեգի ներսում՝ <label>Click me <input type="text"></label>
կամ <label>-ի for և էլեմենտի id դաշտերը համընկնում են*/}
function Formik_part1() {
  
const validationSchema = yup.object({
      email:yup
              .string()
              .email()
              .required("type Email!"),
      password:yup
                 .string()
                 .matches(/^[A-Za-z0-9]{3,19}$/g)
})
const initialValues = {
    email:'example@mail.com',
    password:''
}
const onSubmit = values => {
      console.log(values);
}
const formik = useFormik( {
 /*  validate: values => {
      let errors = {}
      if (!errors.email) {
          errors.email = "type email!"
      }
      if (!errors.password) {
          errors.password = "type password!"
      }
      return errors
  } */
     initialValues,
     validationSchema,
     onSubmit
} )  
console.log(formik.errors);
  return (
    <div className='container'>
     <form onSubmit={formik.handleSubmit}>
       <div className='form_group'>
         <label htmlFor='email'>Email</label> 
         <input 
         type="email" 
         id="email" 
         name="email"
        /*  value={formik.values.email}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} */
         {...formik.getFieldProps(...("email"))}/>
         {formik.errors.email && formik.touched.email ? <div className='errors'>{formik.errors.email}</div> : null}
       </div>
       <div className='form_group'>
         <label htmlFor='password'>Password</label> 
         <input 
         type="password" 
         id="password" 
         name="password"
         /* value={formik.values.password}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} */
         {...formik.getFieldProps(...("password"))}/>
         {formik.errors.password && formik.touched.password ? <div className='errors'>{formik.errors.password}</div> : null}
       </div>
       <button type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default Formik_part1;