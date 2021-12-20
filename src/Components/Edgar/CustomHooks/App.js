import React from 'react'
import "./App.css"
import { CustomHook } from './CustomHook'

export default function App() {
    const [value, {inc, dec, reset}] = CustomHook({
    min: 0,
    initial: 0,
    max: 120,
    step: 1
    })
    return (
        <div className="box">
           <h3>Volume</h3>
            <button onClick={dec}>-</button>
            <span>{value}</span>
            <button onClick={inc}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
