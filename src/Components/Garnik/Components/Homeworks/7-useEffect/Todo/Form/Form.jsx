import React from 'react';
import './Form.css'

function Form(props) {

const handlerSubmit = (e) => {
     e.preventDefault()
     let val = e.target[0].value
     props.addTask(val)
}

    return <div>
           <form  onSubmit={handlerSubmit}>
            <div className="row">
             <div className="col s12">
              <div className="row">
                 <div className="input-field col s12">
                 <i className="material-icons prefix">textsms</i>
                 <input type="text" id="autocomplete-input" className="autocomplete" />
                 <label htmlFor="autocomplete-input">Your Task</label>
                 </div>
                </div>
              </div>
             </div>
             </form>
            </div>;
}

export default Form;
