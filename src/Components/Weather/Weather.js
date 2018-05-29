import React from 'react';

class Weather extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	fetchWeather = () => {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&units=metric&appid=e6c7da7f41662a0f0759bdce0eca3948')
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					main: result.weather[0].main,
					description: result.weather[0].description,
					temperature: result.main.temp,
					humidity: result.main.humidity,
					wind: result.wind.speed
				})
			})
			.catch((error) => {
				alert(`Something went wrong! ${error}`)
			})
	}
	
	componentDidMount() {
		this.fetchWeather();
	}

	render() {
	return (
		<div>
			<h2>Weather in Stockholm</h2>
			<h3>{this.state.main}</h3>
			<ul>
				<li><p>{this.state.description}</p></li>
				<li><p>Temperature: {this.state.temperature} degrees Celcius</p></li>
				<li><p>Humidity: {this.state.humidity}%</p></li>
				<li><p>Wind: {this.state.wind} m/s</p></li>
			</ul>
		</div>
	)
	}
}

export default Weather;