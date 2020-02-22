import React, { Component } from 'react';
import './../assets/css/App.css';
import StartScreen from "./screens/StartScreen";
import Stepper from "./combined/Stepper";
import SecondScreen from "./screens/SecondScreen";

export const ALL_STEPS = 8;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      realStep: 3,
      data:[]
    };
    this.getScreen = this.getScreen.bind(this);
    this.screenHandler = this.screenHandler.bind(this);
  }


  getScreen(){
    let screens = [
        <StartScreen handler={this.screenHandler} step={this.state.realStep}/>,
        <SecondScreen handler={this.screenHandler} step={this.state.realStep}/>,
        <Stepper step={this.state.realStep}/>
    ];
    return screens[this.state.step]
  }

  screenHandler(data = null, increaseStep = false){
    if(data){
      this.setState({
        data: this.state.data.push(data)
      })
    }
    if(increaseStep){
      this.setState({
        realStep: this.state.realStep+1
      })
    }
    this.setState({
      step: this.state.step+1
    })
  }

  render() {
    return (
        this.getScreen()
    );
  }
}

export default App;
