import React, { Component } from 'react';
import './App.scss';
import Front from "./comps/Front";
import Bio from "./comps/Bio";
import Abs from "./comps/Abs";
import Skins from "./comps/Skins";

class App extends Component {
  render() {
    return (
        <div>
            <Front/>
            <Bio/>
            <Abs/>
            <Skins/>
        </div>
    )
  }
}

export default App;
