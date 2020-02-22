import React, {Component} from 'react';
import '../assets/css/App/App.css';
import StartScreen from "./screens/StartScreen";
import Footer from "./combined/Footer";
import Form from "./combined/Form";
import ruCompanies from "./../assets/json/ru_companies";
import enCompanies from "./../assets/json/en_companies";
import questions from "./../assets/json/questions";
import VoteScreen from "./screens/VoteScreen";

export let ALL_STEPS = questions.lenght;
export const RU_NOMINATION = "Российская авиакомпания года - лидер пассажирских симпатий";
export const EN_NOMINATION = "Зарубежная авиакомпания года - лидер пассажирских симпатий";
export const NOMINATIONS = {
    "ru": RU_NOMINATION,
    "en": EN_NOMINATION
};
export const COMPANIES = {
    "ru": ruCompanies,
    "en": enCompanies
};
export const RU = "ru";
export const EN = "en";

export function makeName(nomination, question) {
    return nomination + "_" + question;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            data:{}
    };
    this.getScreen = this.getScreen.bind(this);
    this.screenHandler = this.screenHandler.bind(this);
  }

    makeForms(lang, part){
        let forms = [];
        for(let i=0; i<questions.length; i++){
            let props = {
                "key":questions[i],
                "nomination":NOMINATIONS[lang],
                "handler":this.screenHandler,
                "companies":COMPANIES[lang],
                "question":questions[i],
                "step": questions.length * part + i
            };
            if(i !== 0){
                props.selected = this.state.data[makeName(NOMINATIONS[lang], questions[0])]
            }
            forms.push(
                <VoteScreen
                    {...props}/>
            )
        }
        return forms;
    }

  getScreen(){

    let screens = [
        <StartScreen handler={this.screenHandler}/>,
        <StartScreen handler={this.screenHandler}/>
        // <SecondScreen handler={this.screenHandler}/>,
    ];
    screens = screens.concat(this.makeForms(RU, 0));
    screens.push(<StartScreen handler={this.screenHandler}/>);
    screens = screens.concat(this.makeForms(EN, 1));
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
