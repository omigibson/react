import React from 'react';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			note: 'Very important note. Remember to do important stuff.'
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
			return (
				<section>
					<h2>Note</h2>
					<form>
					<div className="content">
					<textarea value={this.state.note} onChange={this.handleChange}/>
					</div>
					<input type="submit" className="btn btn-info" onClick={this.save} value="Save"/>
					</form>
			</section>
				)
		}
		else {
			return (
				<section>
					<h2>Note</h2>
					<div className="content">
						<p>{this.state.note}</p>
					</div>
					<button type="button" className="btn btn-info" onClick ={this.edit} id="edit">Edit</button>
				</section>
				)
		}
	}
}

export default Note;