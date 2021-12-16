import React from 'react'
import { Link,NavLink} from 'react-router-dom'


export default function NAvbar() {
	const abcd = ({ isActive }) => {
		return  isActive ? "active" : "";
	}
	return (
		<div>

			<nav className=' teal darken-4 container mt-5'>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">Logo</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><NavLink to="/" className={abcd}>HOME</NavLink></li>
						<li><NavLink to="/about" className={abcd}>ABUOT</NavLink></li>
						<li><NavLink to="/blog" className={abcd}>blog</NavLink></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
