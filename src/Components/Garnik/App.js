import React,{Component} from 'react'
import "./App.css"
import List from './Components/List'


class App extends Component {

  state = {

    users: [ 
          { id: 1, fullName: "Veliant", age: 30, salary:340_000 },
          { id: 2, fullName: "Symon", age: 27, salary:140_000 },
          { id: 3, fullName: "Rafael", age: 28, salary:200_000 },
          { id: 4, fullName: "Jonathan", age: 31, salary:500_000 } ]

  }

  deleteItem = (id) => {
    
    let users = [...this.state.users]

    users = users.filter( (elem) => elem.id !== id )

    this.setState( {users} )
  }
 
  render() {

    const {users} = this.state

    return (
      <div className='container'>
        <List users = {users} deleteItem = {this.deleteItem} />
      </div>
    )

  }

}


export default App

