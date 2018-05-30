import React from 'react';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			note: 'Write your note here'
		}

	}
	edit = () => {
		this.setState({
			editing: true
		});
	}
	
	handleChange = (event) => {
		    this.setState({note: event.target.value});
	}
	
	save = (event) => {
		event.preventDefault();
		localStorage.setItem('Note', this.state.note);
		this.setState({
			editing: false
		});
	}
	
	componentDidMount() {
		const note = localStorage.getItem('Note');
		if(note){
			this.setState({ note: note });
		}
	}
	
	render() {
		if(this.state.editing){
			return <div className="note">
			<form>
			<textarea value={this.state.note} onChange={this.handleChange}/>
			<input type="submit" onClick={this.save} value="Save"/>
			</form>
		</div>
		}
		else {
			return (
				<section>
			<h2>Note</h2>
			<p>{this.state.note}</p>
			<button onClick ={this.edit} id="edit">Edit</button>
			</section>
				)
		}
	}
}

export default Note;