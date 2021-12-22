import React,{useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

// part 3 search
// getPhotos searchPhoto միացումը արդեն ՛finished՛ օրինակում
export default function App() {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	//search—ի համար
	const [query, setQuery] = useState('');

	useEffect(() => {
		getPhotos();
		//InfiniteScroll/next-ի մեջից հանում ենք "getPhotos()" կանչը կախվածությունը նշելով այստեղ
		// eslint-disable-next-line
	}, [page])

	function getPhotos(){
		fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`)
			.then((res) => res.json())
			.then(data =>{
				console.log('data', data);
				//Եղած նկարներին ավելացնում ենք նոր 10 նկարների օբյեկտը
				//տես քոնսոլում 'Components/App/State'-ի փոփոխվող արժեքը
				setImages((images) => [...images, ...data])
			})
	}

	// Վերադարձնում ենք error եթե access key չկա 
	if (!accessKey) {
		return (
			<a href="https://unsplash.com/developers" className="error">
				Required: Get Your Unsplash API Key First
			</a>
		);
	}

	function searchPhoto(e) {
		e.preventDefault()
		fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${page}&query=${query}`)
			.then((res) => res.json())
			.then(data => {
				console.log('data', data);
				//data.results. որովհետև սերվերի կողմից ուղարկած տվյալը այդ օբյեկտի մեջ է
				//ի տարբերություն նախորդ օրինակի
				//Ցույց ենք տալիս միայն որոնման արդյունքները
				setImages(data.results)
				setImages((images) => [...images, ...data.results])
			}).catch(err => alert(err))
	}

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form onSubmit={searchPhoto}>
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
			next={()=>setPage(page=> page + 1)}
			hasMore={true}
			loader={<h4>Loading...</h4>}
			>
      <div className="image-grid">
			{images.map((image, index) => (
				<a className="image" key={index} href={image.links.html} target="_blank" rel="noopener noreferrer">
			<img 
			src={image.urls.regular} 
			alt={image.alt_description} 
			value={query}
			onChange={(e)=>{
				console.log(e)
				setQuery(e.target.value)
			}}
			/>
          </a>
        ))}
      </div>
	</InfiniteScroll>
    </div>
  );
}





// hasMore: он сообщает InfiniteScroll компоненту о необходимости вызова next функции при достижении дна и показывает endMessage пользователю
//мы используем rel=»noreferrer noopener», чтобы заблокировать использование объекта window.opener JavaScript, потому что как только window.opener перестает работать, вкладка не сможет управлять другой вкладкой.