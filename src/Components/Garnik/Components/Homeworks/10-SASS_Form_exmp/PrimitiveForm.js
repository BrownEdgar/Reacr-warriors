import React, { useState, useEffect } from 'react';
import './assets/SASS/App.scss';
import MainForm from './pages/MainForm';

/* Կոդը աշխատեցնելուց առաջ կոմենտավորել այլ css լինկերը,կամ գրադարանները index.html ֆայլից*/

function App() {
const [state, setState] = useState( {

 name:{  value:'',type:'text',errorMessage:'Wrong name!',
         placeholder:'name'  },
 email:{ value:'',type:'email',errorMessage:'Wrong email!',
         placeholder:'email' },
 message:{value:'',type:'',errorMessage:'write the reality!',
         placeholder:'' }
  
} )

const handleChange = (e) => {
      let copy = {...state}
      copy[e.target.name].value = e.target.value; 
      //քանի որ մեր input-ների name ատրիբուտի արժեքը համընկնում է մեր state-ի բանալիների հետ,եթե target-ի name="name" ապա copy["name"],
      //եթե name="email" ապա copy["email"] և եթե name="message" 
       //ապա copy["message"]
      //Դիմելաձևը տես ներքևում
      setState(copy);
      console.log(e.target);
}
const handlerSubmit = (e) => {
      e.preventDefault();
}

 return <div className='container'>
          <MainForm handlerSubmit={handlerSubmit} 
                    handleChange={handleChange}
                    state={state}/>
        </div>

}

export default App;



//Դիմելաձև 

//let obj = {
//  a:1
//}

//console.log(obj['a']); */