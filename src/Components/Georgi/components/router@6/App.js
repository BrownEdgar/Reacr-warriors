import React, { Component } from 'react'
import Navbar from './Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SpecialPage from './pages/SpecialPage'
import ErrorPage from './pages/ErrorPage'




export default function App() {
	return (
		<div className='container'>
			<Navbar />
			<Routes>
				<Route path = "/home" element = {<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about/:id" element={<SpecialPage />} />
				<Route path="*" element={ <ErrorPage /> } />
			</Routes>
		</div>
	)
}
