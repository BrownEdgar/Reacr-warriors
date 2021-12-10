import React, { Component } from 'react'
import './App.css';
import Users_id from "./components/Users_id"
import Watches from './components/Watches'; 

export default class App extends Component {
	state = {
		users : [
			{id: 1, firstname: 'John',  age: 30, salery: 1_000_000},
			{id: 2, firstname: 'Konan',  age: 30, salery: 1_200_000},
			{id: 3, firstname: 'Bob', age: 30, salery: 900_000},
			{id: 4, firstname: 'Jeck', age: 30, salery: 700_000},
			{id: 5, firstname: 'Hulk', age: 30, salery: 2_000_000},
		],
              clock: new Date().toLocaleTimeString()
	}
       StartRunning = (action) => {
             action = setInterval(() => {
                    this.setState({ clock: new Date().toLocaleTimeString()})
             }, 1000);
       }

       deleter = (id) => {
              let users = [...this.state.users];
              users = users.filter(elem => elem.id !== id);
              this.setState({ users });
       }
	   //Chkaraca nen anem vor kangni taymery.......
	render(){
		return(
                     <div>
                            <Users_id users={this.state.users} deleter={this.deleter} />
                            <Watches clock={this.state.clock} StartRunning={this.StartRunning} />
                     </div>
		)
	}
}


