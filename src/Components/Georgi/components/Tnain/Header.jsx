import React from 'react';
import './Header.scss'

export default function Header() {
    return (
        <div>
            <div className='text'>
                <h1>backgound is <span>blue</span> </h1>
            </div>
            <div className='container'>
                <div className='text-holder'>
                    <h1><span>React events</span>(chang background)</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo autem incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo autem incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo autem incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo autem incidunt?</p>
                </div>
                <div className='button-box'>
                    <button className='blackbutton'
                        onFocus={() => {
                            console.log('hello')
                        }}>Black</button>
                    <button className='bluebutton'>Blue</button>
                    <button className='yellowbutton'>Yellow</button>
                </div>
            </div>
        </div>
    );
}
