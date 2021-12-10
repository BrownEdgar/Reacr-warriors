import React from 'react'

export default function Watches(props) {
	return (
		<div>
			<div className='clock'>
				<h1>{props.clock}</h1>
			</div>
			<div className='btns'>
				<button className='btn' onClick={() => props.StartRunning()}>Go</button>
				<button className='btn' onClick={() => props.StartRunning()}>Stop</button>
			</div>
		</div>	
	)
}
