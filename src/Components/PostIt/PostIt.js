import React from 'react';

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this);
		this.delete = this.delete.bind(this);
		this.save = this.save.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.renderDisplay = this.renderDisplay.bind(this);
	}
	edit() {
		this.setState({
			editing: true
		});
	}
	
	delete() {
		alert("Deleting!");
	}
	
	save(){
		alert("Saved!");
	}
	renderForm(){
		return(
		<div className="note">
			<form>
			<textarea/>
			<button onClick={this.save}>Save</button>
			</form>
		</div>
		)
	}
	
	renderDisplay() {
		return (
			<div className="note">
			<p>Anteckning</p>
			<button onClick ={this.edit} id="edit">Edit</button>
			<button onClick={this.remove} id="delete">Delete</button>
			</div>
		)
	}
	
	render() {
		if(this.state.editing){
			return this.renderForm();
		}
		else {
			return this.renderDisplay;
		}
	}
}

export default Note;