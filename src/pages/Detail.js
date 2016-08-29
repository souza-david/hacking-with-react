import Chance from 'chance';
import React from 'react';

class Detail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: chance.first(),
			country: chance.country({ full: true })
		};
	}

	buttonClicked() {
		const newState = {
			name: chance.first()
		};

		this.setState(newState);
	}

	render() {
		return (<div>
				<p>Heelo, {this.state.name}.</p>
				<p>You're from {this.state.country}.</p>
				<button onClick={this.buttonClicked.bind(this)}>Meet Someone New</button>
			</div>);
	}
}

export default Detail;