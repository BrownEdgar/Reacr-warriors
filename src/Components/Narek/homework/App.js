import React,{useEffect,useState}from 'react';


export default function App() {
  const [arr,setarr]=useState([1,2,45,65,78,99])   

useEffect(()=>{
    setTimeout(()=>{ 
        localStorage.setItem('array',arr)
    },2000)  
},[])
console.log(arr)

  return(
   <div>


   </div>
  )
}
