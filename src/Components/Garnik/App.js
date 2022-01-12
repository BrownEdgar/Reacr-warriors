import React,{Component} from 'react'
import "./App.css"



/* 
function App() {

  const arr = ['html', 'CSS', 'javaScript', 'React.js', 'ReactNative']

  return (
    <div className="container" style = {style.container}>
      <h1 style = {style.h}>CSS in React.js</h1>
      <img src = "./img/photo.jpg" />
    </div>
  );

  
} */

 
export default class App extends Component {

  state = {
    count: 0
  }

  handlerClick = () => {
   
    let count  = this.state.count

    count += 1;

    this.setState( {count} );
  }

  landlerClick = () => {
    
   let count = this.state.count;

   count -= 1;

   this.setState( {count} );

  }

  bandlerClick = () => this.setState( {count: 0} ) 

  render () {

    const {count} = this.state;

    return (
          <div>
            <h1>hello</h1>
            <h3>{count}</h3>
           <button onClick = {this.handlerClick}>+</button>
           <button onClick={this.landlerClick}>-</button>
           <button onClick={this.bandlerClick}>reset</button>
          </div>
    );

  }

} ;
