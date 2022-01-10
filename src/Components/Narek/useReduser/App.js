import React,{useReducer} from 'react'

function reducer(state,action){
    console.log(action)
switch (action.type) {
    case 'array':
        console.log('array')
        break;
    case 'arr':
         console.log('arr')
         break;
     default:
        break;
   }
}
export default function App() {
    const [state, dispatch] = useReducer(reducer, [1,5,6,4,7,8]);
    return (
        <div>
<button onClick={() => dispatch({type: 'array'})}></button>
<button onClick={() => dispatch({type: 'arr'})}></button>    
        </div>
    )
}
