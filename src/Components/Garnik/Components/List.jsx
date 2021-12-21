import React from 'react'

function List(props) {
    return (
        <div className='flex'>
         {props.users.map( (user) => {
             return (
                 <div className='flex_item' key={user.id}>
                  <p>ID:{user.id}</p>
                  <p>Name:{user.fullName}</p>
                  <p>Age:{user.age}</p>
                  <p>Salary:{user.salary}</p>
                  <button className='deleter' onClick={() => props.deleteItem(user.id)}>X</button>
                 </div>
             )
         } )}
        </div>
    )
}



export default List