import React, { useState, useEffect } from 'react';
import './App.css'
//տվյալ փեքիջը մեզ թույլ է տալիս ավտոմատ կերպով բեռնել
//կոնտենտը scroll-ի ժամանակ
import InfiniteScroll from 'react-infinite-scroll-component'
//դուրս ենք բերում key-ը ․env ֆայլից որը վերցրել ենք unsplash.com կայքից
//որը ունիվերսալ key-է և պատկանում է միայն տվյալ օգտատիրոջը
//այսինքն այս պրոյեկտը չի կարող աշխատել մեկ այլ օգտատիռոջ համար
const accessKey = process.env.React_APP_UNSPALSH_ACCESS_KEY;//ՈՒՇԱԴԻՐ env
 ///ֆայլում key-ը ուշադիր կգրեք քանի որ այն մեկ արժեքի համար ընդունում է միայն առաջին անգամ գրված key-ը
console.log(accessKey);
//Խնդիր՝կատարել api request unsplash.com կայքից փնտրվող
//նկար ստանալու համար,այսինքն երբ մենք մուտքագրենք dog
//մեզ վերադարձվենք շան նկարներ unsplash-ից,երբ մուտքագրենք 
//car էջում տեսնենք մեքենաների նկարներ
//api request֊ի հասցեն՝https://api.unsplash.com/photos?client_id=accessKey&page=${page}

//Որպեսզի կատարենք api request մենք առաւին հերթին
//պետք է վերցնենք հասցե  unsplash.com կայքից որը 
//կայքը մեզ տրամադրում է իր documentation բաժնում
//https://unsplash.com/documentation

function App() {
  //7.այն պահել state-ի մեջ,default արժեքը կնշանակենք դատարկ տող
  //որպեսզի էջի առաջին բեռնման ժամանակ ոչինիչ չփնտրի  
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1) //18 և նախնական արժեքը կդնենք 1(մեկ էջ) 
  /* դոկումենտացիայում ասվում է որ եթե մենք չենք ասում թե էջ քանի նկար պետք է պարունակի,այն default մեզ
  վերադարձնում է 10 նկար */
  const [images, setImages] = useState([]); //22.images state որի մեջ կպահենք նկարների զանգվածը

  useEffect( () => {
    getPhotos()    //26 երբ որ page-փոխվի useEffect-ը կկանչի getPhotos
  },[page] )

  const getPhotos = () => {
    /* 13․ ֆունկցիան դիմում է unsplash-ին,որի համար պետք է կարդանք
    unsplash-ի դոկումենտացիան մեր խնդրի մասով՝ https://unsplash.com/documentation#search-photos*/
    //որտեղ unsplash֊ը պահանջում է client id և նշում է որ clinet id-ին պետք է փոխանցվի հետևյալ
    //url-ով՝` https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY որից որ պետք է ստանանք նկարները
    //դրա համար մենք copy ենք անում այս հասցեն և պահում փոփոխականի մեջ ջնջնելով միայն client_id=YOUR_ACCESS_KEY
    //տողը քանի որ clinet-ը կարող է չունենալ key-ը
    let apiUrl = `https://api.unsplash.com/photos/?&client_id=${accessKey}`; //14 Սա նախնական հասցեն է որը մեզ վերադարձնում է 
    //random ֆոտո;
    //15․ դրա համար մենք սկզբից կատարում ենք ստուգում  
    if (query) { // այսինքն եթե input-ում կատարենք մուտքագրում այն կհասնի այստեղ և պայմանի կաշխատի
      //քանի որ query-ին չի լինի դատարկ տող որովհետև դատարկ տողը մեզ վերադարձնելու է false և պայմանը չի աշխատի
      //16.Դրա համար մենք գրում ենք`
      apiUrl = `https://api.unsplash.com/search/photos/?query=${query}`
      //ավելացնելով search-ը քանի որ արդեն հարցման ուղին փոխվում է քանի որ նախնական apiUrl֊ը մեզ վերադարձնում է
      //random ֆոտո իսկ երբ որ մենք փնտրում ենք կոնկրետ տեսակի նկար արդեն չենք կարող ստանալ random ֆոտո,և սա
      //նշանակում է արդեն որ հարցումը պետք է ուղարկել արդեն search/photos/?֊ով և հարցականից հետո գրվում է query
      //պարամետր որը հավասարեցնում ենք մեր input-ում մուտքագրված արժեքին

      /* 17 */
      //դրանից հետո մենք այս apiUrl֊ին գումարում ենք նաև էջերի քանակը։ 
      //Եթե մենք url-ում ցանկանում ենք կոնկրետացնել ինչ որ տվյալ դրանից առաջ դնում ենք ամպերսանտ՝& որը  
      //իսկ հարցականը նշանակում է որ չգիտենք թե դրանից հետո ինչ կգա 
      apiUrl += `&page=${page}`;//մենք պետք է server-ին փոխանցենք որերրոդ էջում ենք,սրա համար նույնպես
      //կսարքենք state
      //19 և վերջում բնակաբար տալիս ենք մեր clinet id-ին
      apiUrl += `&client_id=${accessKey}`;
      //և եստեղ կարող ենք console.log անել apiUrl֊ը հասկանալու համար թե ինչպես է այն գնում server 
/*       console.log(apiUrl);
 */      //20. հենց այս url-ով ել պետք է հարցում ուղարկվի server fetch-ի կամ axios-ի միջոցով,գրում ենք
      fetch(apiUrl)
        .then(res => res.json())//21. )//կանչում ենք then-ը դարձնելով օբյեկտ json-ի օգնությամբ և հաջորդ then֊ի մեջ
        .then(data => {
          const imagesFromApi = data.results ?? data; // << ?? >> (օպերատորի բացատրությունը տես ներքևում)
          //23․կարևոր տող ստեղծում ենք imagesFromApi փոփոխական որի արժեքը կախված է data-ից սկզբում երբ որ
          //էջը բեռնվում է data-ն դեռ չկա,հետևաբար չկա նաև data.result-ը որի մեջ մեր նկարներն են,քանի դեռ input-ում ոչինչ չի մուտքագրվել,եթե մենք setImages() մեթոդին տանք data.result մենք կունենանք 
          //error,իսկ այս դեպքում imagesFromApi փոփոխականի արժեքը կլինի հետևյալը՝
           /* առաջինը ՝data եթե այն null կամ undefined չէ կամ երկրորդը՝ data.results եթե առաջինը null կամ undefined է */
           //այսիքն եթե unsplash-ը գտել է հարցմանը համապատասխան նկար data.results եթե չէ data
           //24 եթե page-ը մեկ է ապա մեզ վերադարձրու նկարների նոր զանգված  
          if( page === 1 ) {
              setImages(imagesFromApi);
              return
          }
          //25 if page > 1 մենք ավելացնում ենք մեր անսահման scroll-ը
          setImages((images) => [...images,...imagesFromApi]);
        }) 
  //Հավելյալ//
  //.then(data  => console.log(data))մենք այս data-ն(data բառի փոխարեն կարող է լինել մեկ այլ բառ) որը գալիս է unsplash-ից կարող ենք console.log անել և տեսնել որ մեզ գալիս է օբյեկտ որի մեջ կա total հատկություն որը ցույց է տալիս unsplash-ի բազայում տվյալ հարցմանը համապատասխան նկարների քանակը որոնք
  //կարող են լինել հազարավորները(քանակը կախված է փնտրվող նկարից),բայց քանի որ default էջը ստանում է
  //առաջին 10 նկարը,մենք այդ օբյեկտի մեջ տեսնում ենք results հատկություն,արժեքը՝ 10 զանգված,ամեն զանգվածում մի նկար իր տվյալով

}

  }

  //4.կստանա event 
  const searchPhotos = (e) => {
    e.preventDefault() //5.կանգնեցնում ենք էջի refresh-ը submit-ից հետո
    //12․ որը իր մեջ կկանչի երկու ֆունկցիա որոնցից առաջինը՝setPage()֊ը
    //փոխում է էջը որովհետև unsplash-ի դոկումենտացիայում կա այսպիսի տարբերակ որ եթե օրինակ դուք փնտրում էք
    //ավտոմեքենայի նկար և կայքում կա օրինակ 10000 ավտոմեքենայի նկար բնականաբար միանգամից ներբեռնել 10000
    //նկարը մեզ ծանրաբեռնվածություն է,դա կարող է լինել մաս մաս օրինակ 10֊ական նկար ամեն էջում,դա նույնպես
    //կարող ենք որոշել թէ ամեն էջում քանի նկար պետք է ցուցադրվի,երբ scroll-ի ժամանակ հասնենք էջի վերջին կրկին լինի api call և մեզ ցուցադրվի հաջորդ տաս նկարը և այդպես շարունակ ամեն էջ փոխվելուց:
    //Այս գործողությունների պատասխանատուները երկուսն են setPage()֊ը որը փոխում է եջը և 
    //getPhotos()-ը որը կատարում է api call ու ստանում է նկարները,եկեք ստեղծենք getPhotos()-ը 
    setPage(1)
    getPhotos()
  }
  //gtnum e arajin arjeqy vor null kam undefined che

  //1.ստեղծում ենք form որի մեջ կլինի input և այդ input-ի
  //մեջ կգրենք այն բառը որին համապատասխան ուզում ենք փնտրել
  //նկար
  //2.Բնականաբար մենք պետք է վերցնենք input-ի արժեքը և
  //դրա համար form-ին կտանք onSubmit ատրիբուտ
  //որը կկանչի համապատասխան ֆունկցիան submit իրադարձության ժամանակ
  console.log(images);
  
  return (
    <div className='app'>
      <h1>Unsplash Image Galerry</h1>
      <form onSubmit={searchPhotos/* 3. որը իր հերթին */}>
        <input
          type="text"
          placeholder='Enter search photo'
          value={query}
          /* 6.մեզ հարկավոր է input-ի value-ն տվյալ 
          value-ով բառը փնտրելու համար,մենք կարող ենք ««տես state-ը վերևում»»*/
          /* 9. մենք կօգտագործենք onChange ատրիբուտը քանի որ այն կարձագանքի
          մուտքագրման դաշտում ամեն տառ սեղմելուն,ջնջելուն և քանի որ այն նույնպես
          event-է,այն կստանա e*/
          onChange={ (e) => { setQuery( e.target.value )  } }/* 10. և մենք կվերցնենք այդ event-ի value-ն
                ու արդեն կարող ենք փոխել նախնկական value-ն setQuery() մեթոդի օգնությամբ*/ 
        /*11.հիմա searchPhotos-ը,ինչ պետք է լինի երբ մուտքագրենք value և սեղմենք enter,
        կաշխատի searchPhotos ֆունկցիան*/
        /* 8.input-ի արժեք մենք չենք ստանում input-ից 
        հետևաբար մենք կունենանք warning React-կողմից որը մեզ կասի ՝ներկայացվել է value forma
        դաշտի համար առանց onChange մշակող ատրիբուտի.Դա կցուցադրի value-ն միայն կարդալու համար.եթե դաշտը չպետք է փոփոխվի,օգտագործեք defaultValue. հակառակ դեպքում օգտագործեք onChange կամ readOnly ատրիբուտները*/
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
    </div>);
}

export default App;

let operator = 'https://learn.javascript.ru/nullish-coalescing-operator'
