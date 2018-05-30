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
		<div>
			<h2>Time</h2>
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    </div>
		);
}
}
export default Clock;