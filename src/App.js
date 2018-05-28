import React from 'react';
import Currency from './Components/Currency/Currency.js';
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
        <Clock/>
		</section>
		<section>
		</section>
      </div>
    );
  }
}

export default App;
