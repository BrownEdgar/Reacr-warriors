import React from 'react'
import {REACT_APP_FIREBASE_KEY} from '../../../env.json'

const API_KEY = REACT_APP_FIREBASE_KEY

function registerHandler () {
         console.log("regist function");
         const data = {
           email:"example@mail.com",
           password:"7KzhGL5",
           returnSecureToken:true
         }
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
         const data = {
           email:"example@mail.com",
           password:"7KzhGL5",
           returnSecureToken:true
         }
         let apiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
         fetch(apiUrl, {
              method:"POST",
              body:JSON.stringify(data)
         })
         .then( res => console.log(res) )
         .catch( err => console.log(err) )
}

function FireBase() {
  return (
    <div>
      <button onClick={() => registerHandler()}>Register</button>
      <button onClick={() => loginHandler()}>Login</button>
      </div>
  )
}

export default FireBase