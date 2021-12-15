import React, { Component } from 'react'
import {Cont} from './App'
export default class Comp extends Component {
    state={
        three:['300 г свежей белокочанной капусты','4 средние картофелины','соль — по вкусу','1–2 сушёных лавровых листа','зелень — по вкусу','1 зубчик чеснока — опционально']
    }
    render() {
        return (
            <div>
             <h1>Борщ</h1> 
                {this.state.three.map((elem,index)=><li key={index}>{elem}</li>)}

                <Cont.Consumer>
                  {value=><li>{value}</li>}
                </Cont.Consumer>
           

            </div>
        )
    }
}
