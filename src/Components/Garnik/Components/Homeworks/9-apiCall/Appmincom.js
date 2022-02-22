import React, { useState, useEffect } from 'react';
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css';

const accessKey = process.env.React_APP_UNSPALSH_ACCESS_KEY;

function App() {

const [images, setImages] = useState([]);
const [page, setPage] = useState(0);
	//search—ի համար
const [query, setQuery] = useState('');

useEffect( () => {
  getPhotos()
},[page] )

const getPhotos = () => {
  let apiUrl = `https://api.unsplash.com/photos/?`

  if(query) {
     apiUrl =`https://api.unsplash.com/search/photos/?query=${query}`;
     apiUrl += `&page=${page}`;
     apiUrl += `&client_id=${accessKey}`

     fetch(apiUrl)
     .then(res => res.json())
     .then(data => {

       const imagesFromApi = data.results ?? data; 

       if( page === 1 ) {
           setImages(imagesFromApi);
           return
       }
       setImages((images) => [...images,...imagesFromApi]);
     }) 
  }
}

const searchPhotos = (e) => {
   e.preventDefault()
   setPage(1);
   getPhotos();
}

//վերադարձնում ենք error եթե accessKey-ը չկա

if (!accessKey) {
  return (
    <a href="https://unsplash.com/developers" className="error">
      Required: Get Your Unsplash API Key First
    </a>
  );
}

  return (
    <div className="app">
      <form onSubmit={searchPhotos}>
       <input
        type="text"
        placeholder='zaebat'
        value={query}
        onChange={ (e) => { setQuery( e.target.value ) } }
       />
      </form>
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="image-grid">
          {images.map((image, index) => (
            <a
              className="image"
              key={index}
              href={image.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;