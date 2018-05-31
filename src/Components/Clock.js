import React from 'react';


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount(){
		this.timerID = setInterval(
		() => this.tick(),
		1000
		);
	}
	
	componnentWillUnMount(){
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({
			date: new Date()
		});
	}
	
    render (){
		return (
		<section>
			<h2>Time</h2>
			<div className="content">
      			<p className="clock">{this.state.date.toLocaleTimeString()}</p>
			</div>
    	</section>
		);
}
}
export default Clock;