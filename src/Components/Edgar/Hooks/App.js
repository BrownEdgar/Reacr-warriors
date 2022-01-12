import React, {useState} from 'react'

export default function App() {
	const [data, setdata] = useState(["a", "b","c"])
	

	const addelement = () => { 

		setdata(data.concat(["d"]))
	 }
	return (
		<div>
			<h1>{data.map((elem,index) => <span key={index}>{elem}</span>)}</h1>
			<button onClick={addelement}>add element</button>
		</div>
	)
}
