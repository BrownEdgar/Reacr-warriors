import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div>
         <nav className="blue-grey darken-4">
          <div>
            <Link to="/" className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
