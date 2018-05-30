import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 300/60,
			seconds: "0" + 300 % 60
		};
	}

	startTimer = () => {
		let duration = 299;
		let countdown = setInterval(() => {
			this.setState({minutes: Math.trunc(duration / 60)});
			this.setState({seconds: (duration % 60)});
			if (duration < 10 || duration === 0){
					this.setState({seconds: "0" + (duration % 60)});
					}
			duration = duration -1;
			
			if (duration < 0){
				clearInterval(countdown);
			}
		}, 1000);
	}
	
	resetTimer = () => {
		clearInterval(this.startTimer.countdown);
		this.setState({minutes: 300 / 60});
		this.setState({seconds: "0" + 300 % 60});
	}
						
	render() {
		return (
		<section>
			<h2>Countdown</h2>
			<h2>0{this.state.minutes} : {this.state.seconds}</h2>
			<button onClick={this.startTimer}>Start</button>
			<button onClick={this.resetTimer}>Reset</button>
		</section>
		)
	}
}
			
	export default Timer;