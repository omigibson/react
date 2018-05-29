import React from 'react';
import Currency from './Components/Currency/Currency.js';
import Timer from './Components/Timer/Timer.js';
import Clock from './Components/Clock/Clock.js';
import Note from './Components/Note/Note.js';
import Weather from './Components/Weather/Weather.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
		<header><h1>Dashboard</h1></header>
		<section><Currency/></section>
		<section><Timer/></section>
		<section><Clock/></section>
		<section><Note/></section>
		<section><Weather/></section>
      </div>
    );
  }
}

export default App;
