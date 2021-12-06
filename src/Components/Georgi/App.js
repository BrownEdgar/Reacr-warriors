import React, { Component, createContext } from 'react'
import './App.css';
import Child from "./components/Child"

export default class App extends Component{
	state = {
		count: 0,
	}

	clickPlus =() => {
		let count = this.state.count;
		count += 1;
		this.setState({count})
	}

	clickMinus = () => {
		let count = this.state.count;
		count !== 0 ? count -= 1 : count = count;
		this.setState({count}) 
	}

     clickZero = () => {
    
          this.setState({ count: 0 })
     }

     clickPlusTen = () => {
          let count = this.state.count;
          count += 10;
          this.setState({count})
     }

     clickPlusHundred = () => {
          let count = this.state.count;
          count += 100;
          this.setState({count})
     }

     clickMinusTen = () => {
          let count = this.state.count;
          count > 10 ? count -= 10 : count = count;
          this.setState({count})
     }

     clickMinusHundred = () => {
          let count = this.state.count;
          count > 100 ? count -=100 : count = count;
          this.setState({count})
     }

	render(){
		const {count} = this.state;
		return (
			<div className="countainer">
				<h1>{count}</h1>
                    <div className="btn_box">
                    <button className ="minus" onClick={this.clickMinusTen}>-10</button>
                    <button className ="minus" onClick={this.clickMinusHundred}>-100</button>
				<button className ="minus" onClick={this.clickMinus}>-</button>
                         <button onClick={this.clickZero}>0</button>
                         <button className="plus"onClick={this.clickPlus}>+</button>
                         <button className="plus"onClick={this.clickPlusTen}>+10</button>
                         <button className="plus"onClick={this.clickPlusHundred}>+100</button>
                    </div>
			</div>
		)
		}
	}
	


