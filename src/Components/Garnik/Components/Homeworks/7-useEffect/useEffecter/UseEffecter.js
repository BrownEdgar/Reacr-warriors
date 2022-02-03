import React, {useState,useEffect} from 'react';
import Form from './Form/Form.jsx'
import List from './List/List.jsx';
import './useEffecter.css'


function useEffecter() {

const [data,setData] = useState( 
      //սկզբից localStorage֊ում չկա 'List' անունով key,այսինքն localStorage֊ը 
      //null-է 
      //հետևաբար՝
      localStorage.getItem('List') !== null //ստուգում ենք եթե localStorage֊ում
      ? //'List'key-ով item-ում կա արժեք որ բան JSON.parse() մեթոդի օգնությամբ այն
      //վերածում ենք javaSript օբյեկտի(զանգված,օբյեկտ և այլն)                                                                                                                                           
      JSON.parse(localStorage.getItem("List")) 
      //դե քանի որ կոմպոնենտի ծնվելու պահին localStorage-ում 
      //չկա նման item որովհետև և localStorage֊ը null է,դա ստեղծում է useEffect-ը
      //մենք կարող ենք ստեղծել դատարկ զանգված state-ում
      //Տես useEffect-ը
      : []
      );
/*կանչում ենք ֆունկցիան վերցնելով e.target[0].value֊ն արգումենտի մեջ*/
const addNewTask = (task) => {
      /* անսիխրոն setData([...data,task]) */
      /*setData-ում կլոնավորում ենք data-ի պարունակությունը
      ավելացնելով task-ը*/
      setData( (prevData) => {                                                                                                                    
            return [...prevData,task] 
      } )
}    
const deleteTask = (id) => {    /* ստանում ենք data-ի մեջ մտած էլեմենտի ինդեքսը որը մեզ
                                 փոխանցվել է props-ով */
      let copy = data.slice()
      //ստեղծում ենք copy փոփոխական
      //և որպես արժեք վերագրում
      // data.slice()֊ից վերադարձված
      //զանգվածը
      //քանի որ slice-ին արգումենտ
      //չենք փոխանցել այն կլոնավորում է
      //ամբողջ զանգվածը
      copy.splice(id,1)
      //splice մեթոդի միջոցով ջնջում ենք մեկ
      //էլեմենտ տրված id(ինդեքսով)-ով,քանի որ
      //splice մեթոդին այստեղ որպես երկրորդ
      //արգումենտ տրված է 1 այն կջնջի mer id-ով
      //էլեմենտից սկսած և վերջացրած մեկ էլեմենտ,կարճ ասած հենց փոխանցված
      //id-ով էլեմենտը
      setData([...copy])
      //setData֊ում տեղադրում ենք copy-ի splice-ից ստացված
      //զանգվազի պարունակությունը
}
//useEffect մեթոդը աշխատում է երբ որ կոմպոնենտի 
//բոլոր երեք կարգավիճակների ժամանակ
//ծնվում է,թարմանում է և մահանում է
useEffect( () => {
localStorage.setItem('List',JSON.stringify(data))
},/* [] */[data] ) //և դրա համարել մենք որպես կախվածություն կարող ենք
      //տեղադրել դատարկ զանգված ինչը նշանակում է որ 
      //այն կաշխատի միայն կոմպոնենտի ծնվելուց հետո

//իսկ եթե մենք այդ զանգվածի մեջ տեղադրենք որև է էլեմենտ
//useEffect֊ը կաշխատի միայն այդ էլեմենտի կարգավիճակների փոփոխության 
//ժամանակ,երբ որ նկարվում է data-

return (
    <div className='container'>
     <Form addNewTask={addNewTask} /* այստեղ props-ից ստանում ենք 
     addNewTask ֆունկցիան e.target[0].value արգումենտով որը 
     հավասարեցնում ենք սույն կոմպոնենտի ֆունկցիային―ԲԱՑԱՏՐՈՒԹՅՈՒՆԸ ՃԻՇՏ ԵՄ ԳՐԵԼ ? */
     />
     <List data={data} /* նկարվում է data-ի ներկա կարգավիչակը(Task-ը)*/ 
     deleteTask={deleteTask}/* աշխատում է deleteTask ֆունկցիան*//>
    </div> )

}

let obj = {a:1,b:2,}

console.log(JSON.stringify(obj));

let obj2 = '{"a":1,"b":2}'

console.log(JSON.parse(obj2));

export default useEffecter;

