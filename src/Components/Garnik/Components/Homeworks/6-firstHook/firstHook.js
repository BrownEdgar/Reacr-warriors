import React, { useState } from 'react';
import './firstHook.css'

//Ստեղծել թվային զանգավծով state,ստեղծել կոճակ որը՝

//+1.որը state-ում կավելացնի էլեմենտ
//+2.կոճակ որը կջնի պատահական էլեմենտը 
//+3.կոճակ որը կխառնի զանգվածը (shuffle)
//+4.կոճակ որը կնկարի զանգավածի թվերի գումարը
//+5.կոճակ որը զանգածի բոլոր թվերը կբազմապատկի 2-ով և կտիպի գումարը
//+6.Զանգվածը պահել local.Storage-ում

//և կնակարի էջում

function App() {

    const [state,setState] = useState([ 1, 2, 3, 4, 5])
    const [oldState,setOldState] = useState([...state])
    const [sum,setSum] = useState(0)
    
    let newState = [...state]

    const addElement = () => {
        let lastItem = newState[newState.length - 1]
        newState.push(lastItem + 1)
        setState(newState);
    }
    const deleteElement = () => {
        let start = 0;
        let end = newState.length - 1
        let itemIndex =  Math.trunc(Math.random() * (end - start) + start)
        newState = newState.filter( item => item !== newState[itemIndex])
        if(newState.length === 0) {
           newState.push(0);
        }
        setState(newState);
    }
    const sumOfNumbers = () => {
        const reducer = (prev,next) => prev + next;
        let sum =  newState.reduce(reducer) 
        setSum(sum)
    }
    const multiplyTwo = () => {
        let emptySum = []
        newState.forEach( (elem,index) => emptySum.push(elem * 2))
        let sum = emptySum.join(", ")
        setSum(sum);
    }
    const setDefault = () => {
        setState(oldState)
        setSum(0)
    }
    const shuffle = () => {
        let shuffle = [...newState]
        shuffle.sort(() => Math.random()-0.5);
        setState(shuffle);
    };
    const sendToLocalStorage = () => {
        localStorage.setItem("my state",state)
    }
    const readeLocalStorage = () => {
        let localState = localStorage.getItem("my state")
        alert(localState)
        if (localState === null) {
        alert("sorry storage cleared,localStorage is equal to: null")
        }
    }
    const clearLocalStorage = () => {
       /*  localStorage.removeItem('my state') */
        localStorage.clear()
    }

    return (
        <div>
            <div className='btn_container'>
                <button className='btn' onClick={addElement}>add number</button>
                <button className='btn' onClick={deleteElement}>delete number</button>
                <button className='btn' onClick={shuffle}>shufle numbers</button>
                <button className='btn' onClick={sumOfNumbers}>sum of numbers</button>
                <button className='btn' onClick={multiplyTwo}>multiply by two</button>
                <button className='btn' onClick={sendToLocalStorage}>send to local</button>
                <button className='btn' onClick={readeLocalStorage}>reade local</button>
                <button className='btn' onClick={clearLocalStorage}>clear local</button>
                <button className='btn' onClick={setDefault}>default</button>
            </div>
            <div className='my_container'>

              <h2>The original state:{oldState.join(" ")}</h2>
    <h2 className='sum'><span className='sum_text'>Calculated Result: </span>{sum}</h2>
    {newState.map((elem, index) => <span className='numbers' key={index}>{elem}</span>)}

            </div>
        </div>
      )
}

export default App;
