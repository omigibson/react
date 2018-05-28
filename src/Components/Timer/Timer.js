import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 300/60,
			seconds: 300 % 60
		};
	}

	startTimer = () => {
		let duration = 300
			setInterval(() => {
			this.setState({minutes: Math.trunc(duration / 60)});
			this.setState({seconds: (duration % 60)});
			duration = duration -1;
		}, 1000);
	}
	
	stopTimer = () => {
		clearInterval();
	}
						
	render() {
		return (
		<div>
			<h2>{this.state.minutes} : {this.state.seconds}</h2>
			<button onClick={this.startTimer}>Start timer</button>
			<button onClick={this.stopTimer}>Stop timer</button>
		</div>
		)
	}
}
			
	export default Timer;