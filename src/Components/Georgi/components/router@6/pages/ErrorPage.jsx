import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<>
		<h1>Sorry Page Not Found</h1>
		<Link to = "/home">Go to Home Page</Link>
		</>
	)
}
