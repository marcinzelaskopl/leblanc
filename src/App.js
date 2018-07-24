import React, { Component } from 'react';
import './App.scss';
import Front from "./comps/Front";
import Bio from "./comps/Bio";
import Abs from "./comps/Abs";

class App extends Component {
  render() {
    return (
        <div>
            <Front/>
            <Bio/>
            <Abs/>
        </div>
    )
  }
}

export default App;
