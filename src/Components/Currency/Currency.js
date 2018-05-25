import React from 'react';
import FetchCurrency from './FetchCurrency';

class Currency extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render () {
		return (
			<div>
			<FetchCurrency/>
			</div>
		)
	}
}

export default Currency;