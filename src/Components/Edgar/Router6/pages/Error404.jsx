import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
	return (
		<>
			<h2>SOrry bro page not found</h2>
			<Link to="/">GO to home page</Link>
		</>
	)
}
