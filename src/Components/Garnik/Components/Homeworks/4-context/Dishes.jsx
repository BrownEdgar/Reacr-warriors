import React from 'react'
import SelectedDish from './SelectedDish'

function Dishes(props) {
    return (
        <div>
        <div className='flex'>
        <SelectedDish del = {props.deleterDish} />
          {props.data.map( (dish) => {
           return (
             <div key = {dish.id} className='flex_item'>
              <p>N:{dish.id}</p>
              <p className='header'>Ճաշատեսակ</p>
              <p className='dishName'>{dish.dishName}</p>
              <button  onClick={() => props.viewDish(dish.id)} className='btn'>ցուցադրել</button>
             </div>
           )
        }  ) }
        </div>
        </div>
    )
}

export default Dishes
