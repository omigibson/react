import React from 'react';


class FetchCurrency extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount(){
		return fetch('http://data.fixer.io/api/latest?access_key=2e51a94cffe167d8552c581636716725&symbols=CAD&format=1')
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					rate: result.rates.CAD,
					date: result.date
				})
			})
			.catch((error) => {
				this.setState({
					fetchResult: error
				})
			});
	}
	render() {
		return (
		<div>
			<h2>Currency conversion</h2>
			<p>1 EUR = {this.state.rate} CAD</p>
			<p>Updated at: {this.state.date}</p>
			<button>Update</button>
			</div>
			)
	}
}


export default FetchCurrency;