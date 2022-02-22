import React from 'react';

function Reducer(state,action) {
  switch (action.type) {
    case "task-1":return task1(state)
    case "task-2":return task2(state)
    case "task-3":return task3(state)
         
    default:throw new Error('no match!')
  } 
}

function task1(state) {
  const clone = [...state]
  let index = clone.findIndex(elem => elem > 3)
  if(state.includes(3) >= 0 ) {

  }
  /* if(index === -1) {
     clone.push(3)
  }else{
     clone.splice(index,0,3)
  }
  return clone */
}



function task2 (state) {
  console.log(state);
}

function task3 (state) {
  console.log(state);
}

export default Reducer;
