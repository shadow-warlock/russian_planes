import React, { Component } from 'react';
import './../assets/css/App.css';
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
