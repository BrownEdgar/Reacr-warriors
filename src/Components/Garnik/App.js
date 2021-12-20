import React,{Component} from 'react'
import "./App.css"
import Persons from './Components/Persons'

/* 1. Կա զանգված մարդկանց տվյալներով։Պահել այն ստեյթի մեջ, փոխանցել այն մեկ ուրիշ կոմպոնենտի և նկարել էջում <li> թեգերի մեջ։
 2․ Հետո ամեն մի <li> թեգի կողքը ավելացնել "X" կոճակ,որը կջնջի համապատասխան <li> թեգը
*/

 
class App extends Component {

  state = {

    users: [ { id: 1, fullName: "Leanne Graham", username: "Bret", age: 36 },
    { id: 2, fullName: "Jonathan Skyu", username: "Mike", age: 42 },
    { id: 3, fullName: "Elizabeth Taylor", username: "Jess", age: 28 },
    { id: 4, fullName: "Gary Oldsban", username: "Andrew", age: 31 } ],

  }
  
  deleterClick = () => {

    let copy = [...this.state.users]

    copy.pop();

    this.setState( {users:copy} );
     
  }

  render () {

  const {users} = this.state;


  return (
          <div>
          <Persons data = {users} deleterClick = {this.deleterClick} /> 
          </div>
    );

    }

};


export default App
