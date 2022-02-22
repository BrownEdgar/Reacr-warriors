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
              .email('invalid Email format')
              .required('Required!'),
      password:yup
              .string()
              .matches(/^[A-Za-z0-9]{8,20}$/g,{message:`invalid 
               password`})//սա message name-ով input-ը չէ
              .required('Required!'),     
})
//կարող ենք ստուգում անել նաև այս եղանակով
const validateComments = (value) => {
      let error = null;
      if(!value) {
        error = 'Comments is Required'
      }
      return error
}
const initialValues = {
    email:'example@mail.com',
    password:'',
    message:''
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
      validateOnChange={false}
      validateOnBlur={false} 
      >
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
       <div className='form_group'>
         <label htmlFor='message'>Comments</label>
         <Field as={'textarea'} id="message" name="message"
         validate={validateComments}/>
         <ErrorMessage name='message' component="p"/>
       </div>
       <button type='submit'>Submit</button>
     </Form>
    </Formik>
   </div>
  );
}

export default Formik_part2;