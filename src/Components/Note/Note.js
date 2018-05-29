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
	
	delete = () => {
		alert("Deleting!");
	}
	
	save = () => {
		alert("Saved!");
	}
	renderForm = () =>{
	}
	
	renderDisplay = () => {
	}
	
	render() {
		if(this.state.editing){
			return <div className="note">
			<form>
			<textarea/>
			<button onClick={this.save}>Save</button>
			</form>
		</div>
		}
		else {
			return <div className="note">
			<p>Anteckning</p>
			<button onClick ={this.edit} id="edit">Edit</button>
			<button onClick={this.delete} id="delete">Delete</button>
			</div>
		}
	}
}

export default Note;