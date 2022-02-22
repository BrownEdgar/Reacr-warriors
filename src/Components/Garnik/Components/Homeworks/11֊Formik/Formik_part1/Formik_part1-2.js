import React, { useState, useEffect } from 'react';
import './Formik_part1-2.scss'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup'
{/* <label>-ը նախատեսված է էլեմենտի կլիքի տարածքը մեծացնելու համար,այսինք կլիք անելով <label>-ի վրա
ձեր կլիքը անդրադառնում է նաև տվյալ էլեմենտի վրա,եթե էլեմենտը գտնվում է թեգի ներսում՝ <label>Click me <Field type="text"></label>
կամ <label>-ի for և էլեմենտի id դաշտերը համընկնում են*/}
function Formik_part2() {
  
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

  return (
    <div className='container'>
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit} 
    className='container'>
     <Form>
       <div className='form_group'>
         <label htmlFor='email'>Email</label> 
         <Field type="email" id="email" name="email"/>
         <ErrorMessage name='email' component="p"/>
       </div>
       <div className='form_group'>
         <label htmlFor='password'>Password</label> 
         <Field type="password" id="password" name="password"/>
         <ErrorMessage name='password' component="p"/>
       </div>
       <button type='submit'>Submit</button>
     </Form>
    </Formik>
   </div>
  );
}

export default Formik_part2;