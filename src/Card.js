import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="bg-light-blue dib br3 pa2 ma2 grow shadow-5">
				<img src={`https://robohash.org/${this.props.foto}?set=set4`} className="w-40" alt="avatar" />
				<div>
					<h2>{ this.props.name }</h2>
					<p>{ this.props.email }</p>
					<p>{ this.props.negara }</p>
				</div>
			</div>
		);
	}
}

export default Card;