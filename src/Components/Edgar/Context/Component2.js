// /////////////////////////////////////////////////////////////////////////////
//  - MyContext.Consumer-ը վերադարձնում է արժեք ֆունկցիայի միջոցով
//  - value արգումենտի մեջ գտնվում է App.js-ում հայտարարված 
//	՛Provider՛- ի փոխանցած արժեքը
// /////////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react';
import {MyContext} from './App';
class Component2 extends Component {
    render() {
        return (
            <div
                style={{
                border: "2px solid brown",
                width: '200px',
                margin: '50px auto',
                padding: "10px",
                textAlign: 'center'
            }}>
				{/*Consumer-ը ընդունում է ֆունկցիա որպես ՛child՛ կոմպոնենտ։
				Այդ Ֆունկցիան վերցնում է ընթացիկ "context"-ը վերադարձնում է React-կոմպոնենտ։: */}
                <MyContext.Consumer>
                    {value => <p>{value}</p>}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Component2;