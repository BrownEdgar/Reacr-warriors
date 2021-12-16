import React from 'react'
import { useParams } from 'react-router-dom'


export default function SpecialPage(props) {
	const {id} = useParams()
	return (
		<div className='container'>
			<h1>About {id}</h1>
			<div class="row">
				<div class="col s6">
					
				</div>
				<div class="col s6">2</div>
			</div>
		</div>
	)
}
