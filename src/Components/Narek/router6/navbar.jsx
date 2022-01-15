import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (

            <div>
              <nav>
    <div class="nav-wrapper">
      <link href="#" class="brand-logo">Logo</link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><link to="/">Home</link></li>
        <li><link to="/about.js">react</link></li>
        <li><link to="/App.js">JavaScript</link></li>
      </ul>
    </div>
  </nav>    
          </div>
        )
    }
}
