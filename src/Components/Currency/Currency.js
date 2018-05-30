import React from 'react';


class Currency extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	fetchCurrency = () => {
		fetch('http://data.fixer.io/api/latest?access_key=2e51a94cffe167d8552c581636716725&symbols=CAD&format=1')
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					rate: result.rates.CAD,
					date: result.date
				})
			})
			.catch((error) => {
				alert(`Something went wrong! ${error}`)
			})
	}

	componentDidMount() {
		this.fetchCurrency();
	}
	
	render() {
	return (
		<section>
			<h2> Currency rate < /h2> 
			<p> 1 EUR = {this.state.rate} CAD </p> 
			<p> Updated at: {this.state.date} </p> 
			<button onClick={this.fetchCurrency}>Update</button> 
		</section>
	)
		}
}

export default Currency;