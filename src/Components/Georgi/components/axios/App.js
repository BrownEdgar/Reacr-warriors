import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
	state = {
		dishes : [
			{id:1,name: 'Pasta', price: 2000},
			{id: 2,name: 'Pizza', price: 3000},
			{id: 3,name: 'Minestrone', price: 5000},
			{id: 4,name: 'Ravioli', price: 7000},
		],
		ingredients : [
			{ id: 1, name: 'Pasta', ingredients: "'Typical of Calabria, this recipe for paccheri al forno pulls together quickly and relies on the oven to do most of the work. Look for high-quality cherry tomatoes and fresh mozzarella, plus bronze-extruded, air-dried pasta, whose coarse texture will hold up to the sauce."},
			{ id: 2, name: 'Pizza', ingredients: "For over 10 years, Alex and I have been studying the art of homemade artisan pizza. We’ve even taken a few trips to Italy to bring back secrets from Rome and Naples. Want to make the best homemade pizza "},
			{ id: 3, name: 'Minestrone', ingredients: "For over 10 years, Alex and I have been studying the art of homemade artisan pizza. We’ve even taken a few trips to Italy to bring back secrets from Rome and Naples. Want to make the best homemade pizza "},
			{ id: 4, name: 'Ravioli', ingredients: "For over 10 years, Alex and I have been studying the art of homemade artisan pizza. We’ve even taken a few trips to Italy to bring back secrets from Rome and Naples. Want to make the best homemade pizza "},
		]
	}
	getIngredients = () => {
		let { ingredients} = this.state
		return (
			<div>
				<h1>Ingredients</h1>
				{ingredients.map(elem => {
				return (
					<div className='component-list'>
						<p key={elem.id}>{elem.name} {elem.ingredients}</p>
					</div>
				)
				})}
			</div>
		)
	}

	render(){
		let {dishes} = this.state
		return(

			<div className='menu'> 

				<h1>Menu</h1>

				<div className='image-box' onClick={this.getIngredients}>

					{dishes.map(elem =>
						
						<div className='menu-list'>
							<h1>{elem.name}<hr/> Price = {elem.price}</h1>
						</div>)}

				</div>
			</div>
		)
	}
}
