import React, { useState, useEffect } from 'react'
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component'

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
console.log(accessKey)

export default function App2() {

	const  [query, setquery] = useState('')
	const  [page, setpage] = useState(1)

	const getPhotos = () => {
		let apiUrl = `https://api.unsplash.com/photos/?`;
		if (query) {
			apiUrl = `https://api.unsplash.com/search/photos/?query=${query}`
			apiUrl += `&page=${page}`;
			apiUrl += `&client_id=${accessKey}`;
			console.log('apiUrl', apiUrl);
			fetch(apiUrl)
			.then(res => res.json())
			.then(data => console.log(data))
		}
	}

	const searchPhotos =(e) => {
		e.preventDefault()
		//setPage(1)
		getPhotos()
	}

	return <div className='app'>
		<h1>Unsplash Images</h1>
		<form onSubmit={searchPhotos}>
			<input 
			type="text"
			value={query}
			onChange={(e) => setquery(e.target.value)}
			placeholder='Photos' />
		</form>
	</div>
}
