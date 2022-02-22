import React from 'react'
import { viewDish } from './Context' //context-ը պետք է import արվի դեպի այն ֆայլ որտեղ որ
//գտնվում է Consumer-ը 


function SelectedDish(props) {
    return (
        <div className='flex_item dishViewer'>
             <p className='dishViewer_header'>Բաղադրիչնների ցուցակ</p>
            <div className='dishViewer_content'>
                 <viewDish.Consumer> 
                   {value => { //եստեղ ացում ենք ստացող context֊ը նորից որպես զույգ թեգ
      //ստացող context֊ը նշանակվում է որպես Consumer(սպառող) որը ստանում է Provider-ի
      //կողմից փոխանցված value-ն(օբյեկտը)
                     return (
                           <div>
                            <button onClick={() => props.del()} className='btn_dishViewer_deleter'>X</button>
                               <p className='dishViewer_content_dishName'>{value.vieWer[0].dishName}</p>
                               <p>{value.vieWer[0].ingredients}</p>
                           </div>
                       )
                   }}
                 </viewDish.Consumer>
            </div>
        </div>
    )
}

export default SelectedDish
