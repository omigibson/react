import React from 'react';


class Currency extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	fetchCurrency = () => {
		fetch('http://data.fixer.io/api/latest?access_key=2e51a94cffe167d8552c581636716725&symbols=CAD&format=1')
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					rate: result.rates.CAD,
					date: result.date,
					updateMsg: 'updateMsg'
				})
			})
			.catch((error) => {
				alert(`Something went wrong! ${error}`)
			})
	}

	componentDidMount() {
		this.fetchCurrency();
	}

	resetMsg = () => {
		this.setState({updateMsg: 'invisible'});
		this.fetchCurrency();
		
	}
	
	render() {
	return (
		<section>
			<h2> Currency rate < /h2> 
			<p className={this.state.updateMsg}>Updated!</p>
			<div className="content">
				<p><strong> 1 EUR = {this.state.rate} CAD </strong></p> 
				<small><p> Updated at: {this.state.date} </p> </small>
			</div>
			<button type="button" className="btn btn-info" onClick={this.resetMsg}>Update</button> 
		</section>
	)
		}
}

export default Currency;