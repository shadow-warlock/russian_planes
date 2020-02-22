import React, {Component} from 'react';
import '../assets/css/App/App.css';
import StartScreen from "./screens/StartScreen";
import SecondScreen from "./screens/SecondScreen";
import Footer from "./combined/Footer";
import Form from "./combined/Form";
import companies from "./../assets/json/ru_companies";

export const ALL_STEPS = 8;
export const LIKING_LEADER_RU = "liking leader ru";
export const TRAFFIC_QUALITY_RU = "tariff quality ru";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 2,
            data:{}
    };
    this.getScreen = this.getScreen.bind(this);
    this.screenHandler = this.screenHandler.bind(this);
    this.getRealStep = this.getRealStep.bind(this);
  }


  getScreen(){
    let screens = [
        <StartScreen handler={this.screenHandler} step={this.getRealStep()}/>,
        <StartScreen handler={this.screenHandler} step={this.getRealStep()}/>,
        // <SecondScreen handler={this.screenHandler} step={this.getRealStep()}/>,
        <Form
            key={LIKING_LEADER_RU}
            name={LIKING_LEADER_RU}
            handler={this.screenHandler}
            companies={companies}/>,
        <Form key={TRAFFIC_QUALITY_RU}
              name={TRAFFIC_QUALITY_RU}
              companies={companies}
              fixed={true}
              handler={this.screenHandler}
              selected={this.state.data[LIKING_LEADER_RU]}/>
    ];
    return screens[this.state.step]
  }

  screenHandler(name=null, datum=null){
    let step = this.state.step;
    let data = this.state.data;
    if(name && datum){
      data[name] = datum
    }
    step++;
    this.setState({
      step: step,
      data: data
    })
  }

  getRealStep(){
    let step = this.state.step;
    if(step < 2)
      return 1;
    if(step >= 2 && step <= 5)
      return step-1;
    else
      return step-2;
  }

    render() {
        return (
            <div>
              {this.getScreen()}
              <Footer/>
            </div>
        );
    }
}

export default App;
