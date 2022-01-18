import React,{Component} from 'react'
import "./App.css"
import Persons from './Persons'

/* 1. Կա զանգված մարդկանց տվյալներով։Պահել այն ստեյթի մեջ, փոխանցել այն մեկ ուրիշ կոմպոնենտի և նկարել էջում <li> թեգերի մեջ։
 2․ Հետո ամեն մի <li> թեգի կողքը ավելացնել "X" կոճակ,որը կջնջի համապատասխան <li> թեգը
*/

class App extends Component {

  state = {

    users: [ { id: 1, fullName: "Leanne Graham", userName: "Bret", age: 36 },
    { id: 2, fullName: "Jonathan Skyu", userName: "Mike", age: 42 },
    { id: 3, fullName: "Elizabeth Taylor", userName: "Jess", age: 28 },
    { id: 4, fullName: "Gary Oldsban", userName: "Andrew", age: 31 } ],

  }
  
  deleterItem = (id) => {
    
     let users = [...this.state.users]; // կլոնավոռում ենք state-ի մեջի եղաածը
     users = users.filter(elem => elem.id !== id); //ֆիլտրում ենք են id-ով էլեմենտը,
     //հանելով այն state-ից 
     this.setState({users}) // նշանակում ենք կլոնավորված state-ը որպես state

  }

  render () {

  const {users} = this.state; //դեստրուկտիվ հավասարում 

  return (
          <div>
            <Persons data = {users}/* նկարում ենք state-ը */ deleterItem = {this.deleterItem} /* աշխատում ենք նկարված state-ի հետ *//> 
          </div>
    );

    }

};


export default App
