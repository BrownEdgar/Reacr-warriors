import React,{ useState,useEffect  } from 'react';
import './Todo.css'
import Form from './Form/Form';
import List from './List/List';
import Counter from './Counuter/Counter';

function Todo() {

  const [data,setData] = useState([])
  const [count,setCount] = useState(0)

  const addTask = (task) => {
       setData( (prevData) => {
           return [...prevData,task]
       } )
  }
  const deleteTask = (id) => {
    let copy = data.slice()
    copy.splice(id,1);
    setData(copy)
}
  useEffect( () => {
       if (data.length > 0) {
       setCount( count + 1 )
       }
  },[data])
  
  return <div>
     <Counter count={` ${count} `}/>
     <div className='myContainer'>
          <Form addTask={addTask}/>
          <List data={data} deleteTask={deleteTask}/>
         </div>
         </div>;
}

localStorage.clear();

export default Todo;
