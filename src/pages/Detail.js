import Chance from 'chance';
import React from 'react';

class Detail extends React.Component {
	render() {
		return <p>
		{chance.first() == 'John' 
						  ? 'Hello, John' 
						  : 'Hello, Another one'}!</p>;
	}
}

export default Detail;