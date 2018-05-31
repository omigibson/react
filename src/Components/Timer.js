import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 300/60,
			seconds: '0' + 300 % 60,
			startButton: '',
			resetButton: 'hidden',
			whenFinished: ''
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
				this.setState({startButton: 'hidden'});
				this.setState({resetButton: ''});
				this.setState({whenFinished: 'finished'})
			}
		}, 1000);
	}
	
	resetTimer = () => {
		clearInterval(this.startTimer.countdown);
		this.setState({minutes: 300 / 60});
		this.setState({seconds: "0" + 300 % 60});
		this.setState({startButton: ''});
		this.setState({resetButton: 'hidden'});
		this.setState({whenFinished: ''});
	}
						
	render() {
		return (
		<section className={this.state.whenFinished}>
			<h2>Countdown</h2>
			<div className= "content">
				<p className="timer">0{this.state.minutes} : {this.state.seconds}</p>
			</div>
			<button type="button" className={`btn btn-info ${this.state.startButton}`} onClick={this.startTimer}>Start</button>
			<button type="button" className={`btn btn-primary ${this.state.resetButton}`} onClick={this.resetTimer}>Reset</button>
		</section>
		)
	}
}
			
	export default Timer;