import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
	return (
		<div>
			<nav className='orange darken-3 container '>
				<div className="nav-wrapper">
					<NavLink to="/" className="brand-logo">Logo</NavLink>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><NavLink to="/home">HOME</NavLink></li>
						<li><NavLink to="/about">ABOUT US</NavLink></li>
						<li><NavLink to="/blog">BLOG</NavLink></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
