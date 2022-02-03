import React, {useState} from 'react'
import './Time.css'


function App() {

const [state,setState] = useState({ 
    time:new Date().toLocaleTimeString() //state-ում ստեղծում ենք օբյեկտ 
    //time հատկությամբ որի արժեքը new Date()-ներկա ժամանակը իսկ toLocaleTimeString()֊ը
    //այն վերածում է string-ի
  });

const [interval,setMyInterval] = useState(); // ստեղծում ենք նոր դատարկ state

  const start = () => {  //ստեղծում ենք ArrowFunc,որը կանչվում է onClick event-ic հետո որտեղ setMyInterval state-ի ներսում
  // կանչում ենք setInterval-(որը 1վարկյանը մեկ կրկնում է կոդը),այսինքն ամենք վարկյանը մեկ նկարում ենք state-ը

    setMyInterval(setInterval(() => {
      setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000))
  }

  const stop = () => clearInterval(interval) //ստեղծում ենք ArrowFunc և clearInterval-ով կանգնեցնում interval state-ի start ֆունկցիան

  return (

    <div>
      <h1>{state.time}</h1>
      <button className='btn btn_success' onClick={start}>START</button>
      <button className='btn btn_deleter' onClick={stop}>STOP</button>
    </div>
   
  )
}


export default App