import React, { Component } from 'react';
import './App.scss';
import Front from "./comps/Front";
import Bio from "./comps/Bio";

class App extends Component {
  render() {
    return (
        <div>
            <Front/>
            <Bio/>
        </div>
    )
  }
}

export default App;
