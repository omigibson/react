import React from 'react';


class FetchCurrency extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {fetchResult: ""};
	}
	
	getCurrency() {
		fetch('http://data.fixer.io/api/latest?access_key=2e51a94cffe167d8552c581636716725&symbols=CAD&format=1')
		.then((response) => response.json())
		.then((result) => {
			this.setState({fetchResult: {result}})
		})
		.catch((error) => {
			this.setState({fetchResult: {error}})
		});
	}
	render(){
	return this.state.fetchResult
}
	}
	

export default FetchCurrency;