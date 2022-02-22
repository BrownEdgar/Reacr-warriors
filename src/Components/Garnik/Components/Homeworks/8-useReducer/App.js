import React,{useReducer} from 'react';
import Reducer from './Reducer';

function App() {
                                             /* state */
const [state,dispatch] = useReducer(Reducer,[1,2,4,5],/* init */)

let arr = ['a','b','c','d']

arr.sort( (a,b) => console.log({a,b})  )

return <div>
        <h2>{state}</h2>
        <button onClick={ () => dispatch({type:'task-1'}) }>
        task1
        </button>
        <button onClick={ () => dispatch({type:'task-2'}) }>
        task2
        </button>
        <button onClick={ () => dispatch({type:'task-3'}) }>
        task3
        </button>
       </div>;
}

//1. 3 թվանշանը դնել իր ճիշտ տեղում
//2. Զանգվածի սորտավորում
//3․ բառերը դասավորել ըստ երկրաության

export default App;
