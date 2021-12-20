import React, { Component } from 'react'
import Comp from './Comp'


export const Cont = React.createContext();

export default class App extends Component {
	state = {
		one: [' японский рис ', 'аказу – красный уксус', 'рисовый уксус', 'рыбные продукты', 'соевый соус ', 'васаби'],
		two: ['лаваш — 1 штука.', 'курица — 200 гр. ', 'белокочанная капуста', 'свежий помидор — 1 шт', 'огурец — 1 шт']

	}
	render() {
		const { one, two } = this.state
		return (
			<div>
				<h1>Cуши:</h1>
				{one.map((elem, index) => <li key={index}>{elem}</li>)}
				<h1>Шаурма:</h1>
				{two.map((elem, index) => <li key={index}>{elem}</li>)}

<<<<<<< HEAD
         <Cont.Provider value={one}>
                   <Comp/>
                <Cont.Provider/>
=======
				<Cont.Provider value={ {a:1}}>
				<Comp />
				</Cont.Provider >
>>>>>>> 34ca3a5aa31969207514a09c4e3f9100b041a142


			</div>
		)
	}
}

