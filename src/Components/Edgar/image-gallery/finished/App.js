import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

// NOTE: make sure to add your unsplash api key
// https://unsplash.com/developers
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
console.log('accessKey', accessKey)

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, [page]);

  function getPhotos() {
	  //Որպեսզի օրոնման արդյունքի 10 նկարից հետո անկապ նկարներ չբերի․․․
	  //
    let apiUrl = `https://api.unsplash.com/photos?`;
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${accessKey}`;
    
    console.log('apiUrl', apiUrl)
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
		  //կարևոր տող․․ եթե "search" տանք կգեներացվի "data.results"-ը
		  //եթե չե ապա "data" որպեսզի error չտա
        const imagesFromApi = data.results ?? data;

        // if page === 1, ապա մեզ պետք են նկարների լրիվ նոր զանգված
        if (page === 1) {
          setImages(imagesFromApi);
          return;
        }

        // if page > 1, ապա մենք ավելացնում ենք մեր անսահման scroll-ը
        setImages((images) => [...images, ...imagesFromApi]);
      });
  }

  function searchPhotos(e) {
    e.preventDefault();
    setPage(1);
    getPhotos();
  }

  // Վերադարձնում ենք error եթե access key չկա 
  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Get Your Unsplash API Key First
      </a>
    );
  }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhotos}>
        <input
          type="text"
          placeholder="Search Unsplash..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
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


