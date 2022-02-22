import React, {useState} from 'react';
/* Կոդը աշխատեցնելուց առաջ կոմենտավորել այլ css լինկերը,կամ գրադարանները index.html ֆայլից*/

function App() {
  
const [state,setState] = useState( {
   name:{
         value:'user name',type:'text',errorMessage:"Wrong!",placeholder:"name"
   },
   email:{
         value:'example@mail.com',type:'email',errorMessage:"Wrong!",placeholder:"name"     
   },
   password: {
         value:'7zKHj8a',type:'password',errorMessage:"Wrong!",placeholder:"name"       
   }
} 
)

const handlerSubmit = (e) => {
      e.preventDefault()
      console.log('no refresh');
}
const handelChange = (e) => {
      let copy = {...state}
      //ուշադիր այստեղ ուղիղ փակագծերի մեջ մենք
      //դիմում ենք համանուն key-ին և քանի որ այն
      //նույնպես օբյեկտ է դրանից հետո դնում ենք կետ
      //և դիմում նրա key-ին
      copy[e.target.name].value = e.target.value
      setState(copy)
}

      return (
            <div className='form_wrapper'>
              <form onSubmit={handlerSubmit}>
                <label>Name: </label>
                <input 
                type="text" 
                id='name' 
                name="name"
                value={state.name.value}
                onChange={handelChange}/>
                <br/>
                <br/>
                <label>Email: </label>
                <input 
                type="email" 
                id='email'  
                name="email"
                value={state.email.value}
                onChange={handelChange}/>
                <br/>
                <br/>
                <label>password: </label>
                <input 
                type="password" 
                id='password' 
                name="password"
                value={state.password.value}
                onChange={handelChange}/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>  
              </form>
            </div>
      )
     }

export default App;



//Դիմելաձև 

//let obj = {
//  a:1
//}

//console.log(obj['a']); */