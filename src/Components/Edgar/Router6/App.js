import React from 'react'
import NAvbar from './NAvbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import "./App.css"

import { Routes, Route } from 'react-router-dom'
import SpecialPage from './pages/SpecialPage'
import Error404 from './pages/Error404'

export default function App() {
	return (
		<div className='container-fluid'>
			<NAvbar/>	
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/about/:id" element={<SpecialPage />}/>
				<Route path="/blog" element={<Blog />}/>
				<Route path="*" element={ <Error404 /> } />
				
			
			</Routes>	
			
		</div>
	)
}
