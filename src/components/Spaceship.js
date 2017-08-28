// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component {
	render() {
		return (
		<div>
	        <h1> {this.props.name} <h1>  
	        <ul>Specs: 
	        	<li>Speed: {this.props.speed}</li>
	        	<li>Colors: {this.props.colors.join(', ')}</li>
	        	<li>Rockets present?: {this.props.hasRockets}</li>
	        </ul>
      	</div>

		)
	}
}

Spaceship.defaultProps = {
  name: 'Spaceship X'
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;