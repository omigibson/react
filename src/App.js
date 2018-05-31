import React from 'react';
import Currency from './Components/Currency.js';
import Timer from './Components/Timer.js';
import Clock from './Components/Clock.js';
import Note from './Components/Note.js';
import Weather from './Components/Weather.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
		<header><h1>Dashboard</h1></header>
		<main className="dashboard">
		<Currency/>
		<Clock/>
		<Timer/>
		<Note/>
		<Weather/>
		</main>
      </div>
    );
  }
}

export default App;
