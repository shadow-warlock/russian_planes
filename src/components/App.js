import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import StartScreen from "./screens/StartScreen";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StartScreen/>
    );
  }
}

export default App;
