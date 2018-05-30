import React from 'react';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}

	}
	edit = () => {
		this.setState({
			editing: true
		});
	}
	
	handleChange = (event) => {
		    this.setState({value: event.target.value});
	}
	
	save = (event) => {
		event.preventDefault();
		localStorage.setItem('Note', this.state.value);
		this.setState({
			editing: false
		});
	}
	
	render() {
		if(this.state.editing){
			return <div className="note">
			<form>
			<textarea value={this.state.value} onChange={this.handleChange}/>
			<input type="submit" onClick={this.save} value="Save"/>
			</form>
		</div>
		}
		else {
			return <div className="note">
			<h2>Note</h2>
			<p>{localStorage.getItem('Note')}</p>
			<button onClick ={this.edit} id="edit">Edit</button>
			</div>
		}
	}
}

export default Note;