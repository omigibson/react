import React from 'react';
import Currency from './Components/Currency/Currency.js';
import Timer from './Components/Timer/Timer.js';
import Clock from './Components/Clock/Clock.js';
//import Note from './Components/PostIt/PostIt.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
		<section>
		<Currency/>
		</section>
		<section>
		<Timer/>
		</section>
		<section>
        <Clock/>
		</section>
      </div>
    );
  }
}

export default App;
