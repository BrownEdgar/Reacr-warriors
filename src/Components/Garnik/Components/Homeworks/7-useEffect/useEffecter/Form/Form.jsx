import React from 'react';

function Form(props) {

const handlerSubmit = (e) => {
     /* e-ն մեզ մոտ event-ն է
     որը մենք  վերցրել ենք onSubmit-ից  */
     e.preventDefault()
     /* event-ի վրա կիրառում ենք 
     preventDefault() մեթոդը որը կանգնեցնում է էջի
     refresh-ը*/
     let val = e.target[0].value
     /* քանի որ event֊ը դուրս է գալիս forma-ից
     ապա  event-ի target-ը(թիրախը) forma-ն է,իսկ
     target-ը դա զանգված է որի էլեմենտները այս դեպքում
     այն էլեմենտներն են որոնց տրված է submit ատրիբուտը։
     մեր դեպքում submit-ը տեղի է ունեցել target-ի
     0 ինդեքսի էլեմենտի կողմից(input-ի) և մենք վերցրել ենք
     նրա value-ն*/
     props.addNewTask(val)
     /* քանի որ մենք functional կոմպոնենտ֊ի մեջ ենք
     props-ով կարող ենք տալ ֆունկցիա փոխանցելով նրան
     e.target[0].value֊ն*/
     val = ""
}

  return (
           <div>
              <form className="col s12" onSubmit={handlerSubmit}
              /* form-ին տրված է onSubmit event ատրիբուտը որը
              հետևում է submit իրադարձությանը որը աշխատում է 
              երբ ուղարկվում է forma դեպի սերվեր և այս իրադարձությունը
              ազդում է բրաուզերի վրա refresh անելով էջը։
              Այստեղ submit-ի ժամանակ աշխատում է handlerSubmit 
              ֆունկցիան որը վերցնում է այդ event-ը*/>
                <div className="row">
                  <div className="input-field col s10">
                    <i className="material-icons prefix">mode_edit</i>
                    <input placeholder="ex. clean the room" id="add_task" type="text" className="validate" required/>
                    <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    <label htmlFor="add_task">Add your Task</label>
                  </div>
                </div>
              </form>
           </div> );
}

export default Form;
