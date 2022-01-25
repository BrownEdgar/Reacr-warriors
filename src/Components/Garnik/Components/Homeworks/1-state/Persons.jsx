import React from 'react'


function Persons(props) {

  
  return (
    <div className='flex'>
      {props.data.map((user) => {  //map-ենք ֆռում data-վրա 
      
        //վերադարձնում ենք օբյեկտի թեգերի մեջ հատկություններով
        return (
        //key-ը state-ի մեջի օբյեկտների id-հատկություննա         
           <div className='flex_item' key={user.id}> 
            <p>ID:{user.id}</p>
            <p>Name:{user.fullName}</p>
            <p>Nick name:{user.userName}</p>
            <p>Age: {user.age}</p>
            <button className='deleter' onClick={() => props.deleterItem(user.id)}>X</button>
            {/* button-ի վրա click անելուց props.deleterItem ֆունկցիային փոխանցվումա user-ի
            id հատկությունը որը հավասարա հերթական նկարված օբյեկտի id հատկությանը*/}
          </div>
        )
      })}
    </div>
  )
}

export default Persons;
