import React, {useState} from 'react'

export const CustomHook = ({
    min = -5000,
    max = 12000,
    initial = 0,
    step = 1
}) => {
    const [value, setValue] = useState(initial)
   
    const inc = ()=>{
        setValue(prevstate => (prevstate  + step > max ? max : prevstate+step))
    }
    const dec = ()=>{
        setValue(prevstate => (prevstate - step < min ? min : prevstate-step))
    }
    const reset = ()=>{
        setValue(initial)
    }
    return [value, {inc, dec,reset}]
}
