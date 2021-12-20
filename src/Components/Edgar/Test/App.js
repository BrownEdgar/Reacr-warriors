import React , { useReducer }  from 'react'
import Button from '../UI/Button/Button'
import reducer from './reducer'
export default function App() {
	const [state, dispatch] = useReducer(reducer, ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python', "SA"])
	return (
		<div>
			<h2>{JSON.stringify(state, null,1)}</h2>
			<button onClick={() => dispatch({ type: 'task-1' })}>xndir 1</button>
			<button onClick={() => dispatch({ type: 'task-sad' })}>xndir 2</button>
			<button onClick={() => dispatch({ type: 'task-3' })}>xndir 3</button>


			<Button title="xndir-1" size="w-75"/>
		
		</div>
	)
}

// 1. 3 թվանշանը դնել իր ճիշտ տեղը
// 2․  զանգվածի սորտավորում
// 3․ բառերը դասավորել ըստ երկարությամբ