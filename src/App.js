import React, { Component } from 'react';
import Exports from'./components/Export.js';
import Classes from './components/Class.js';
import Consts from './components/Const.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Exports />
        <Classes />
        <Consts />
      </div>
    );
  }
}

export default App;
