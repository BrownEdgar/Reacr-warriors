import React, { Component } from 'react'
import './axios.css'
import axios from 'axios'

/* Ստեղծել կոճակ որով՝ */

//1.ջնջել նշված id-ով user-ը state-ից 

//ես Խնդրի վերաբերյալ միքիչ հարցեր կան      


// Function component Ogtagorci
 class App extends Component {

 state = {
      data:[],
      value:''
}

 getData = () => {
  let {value} = this.state
  axios (`https://jsonplaceholder.typicode.com/todos/?_limit=${value}`)
  .then(newData => {
    //   this.setState( {data:newData.data} ) // Petq chi estex stateum pahel heto stugum ane;
      if(newData.status === 200) {
		  this.setState({ data: newData.data })

      }
  }).catch( err => {
     this.setState({err:'error'});
  } )

}

deleterWithId = () => {
  let {data,value} = this.state;
  data = data.filter(  (elem) => elem.id !== +value)

  this.setState({data})
}

deleteAndUpdate = () => {
  let {data,value} = this.state;
  data = data.filter(  (elem) => elem.id !== +value)
  
  data.forEach(  (elem) => {
    if(elem.id === +value + 1) {
       elem.title = 'updateTitle'
    }
    } )
  
  this.setState({data})
}

updateHandler = () => {
  let {data,value} = this.state;

  data.forEach(  (elem) => {
  if(elem.id === +value) {
     elem.title = 'box'
  }
  } )

  this.setState(data)
}

handlerSubmit = (e) => {
  e.preventDefault()
  let value = e.target[0].value
  this.getData(value)
}

  render() {

    let {data,value} = this.state

    return (
      <div>
        <form  onSubmit={this.handlerSubmit}>
          <input 
          type = "number"  
          placeholder='1-200'  
          value={value} 
          onChange={ (e) => this.setState( {value:e.target.value} )}/>
        </form>
        
        <div className='buttons_wrapper'>
          <button onClick={this.getData} type='submit' className='btn btn_success'>get</button>
          <button onClick={this.updateHandler} className='btn btn_changer'>update</button>
          <button onClick={this.deleterWithId} className='btn btn_deleter'>delete</button>
          <button onClick={this.deleteAndUpdate} className='btn btn_uptdeler'>delete-update</button>
        </div>
        <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
    )
  }
}

export default App
