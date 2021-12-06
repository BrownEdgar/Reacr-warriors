import React from 'react'
import "./App.css"

const style = { 
	container: { color: "red", fontSize: "20px" },
	p: {border:"5px solid red"}
 };
export default function App() {
	return (
		<div className="container" style={style.container}>
			<p style={style.p}></p>
			<h2>CSs in React.js</h2>
		</div>
	)
}



