import React, {Component} from 'react';
import '../assets/css/App/App.css';
import StartScreen from "./screens/StartScreen";
import Footer from "./combined/Footer";
import ruCompanies from "./../assets/json/ru_companies";
import enCompanies from "./../assets/json/en_companies";
import questions from "./../assets/json/questions";
import VoteScreen from "./screens/VoteScreen";
import SecondScreen from "./screens/SecondScreen";
import FinallyForm from "./combined/FinallyForm";
import InternationalAirlineScreen from "./screens/InternationalAirlineScreen";

export let ALL_STEPS = questions.length * 2;
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
            data: {}
        };
        this.getScreen = this.getScreen.bind(this);
        this.screenHandler = this.screenHandler.bind(this);
        this.finallyHandler = this.finallyHandler.bind(this);
        this.skipHandler = this.skipHandler.bind(this);
    }

    makeForms(lang, part) {
        let forms = [];
        for (let i = 0; i < questions.length; i++) {
            let props = {
                "key": questions[i],
                "nomination": NOMINATIONS[lang],
                "handler": this.screenHandler,
                "companies": COMPANIES[lang],
                "question": questions[i],
                "step": questions.length * part + i + 1
            };
            if (i !== 0) {
                props.selected = this.state.data[makeName(NOMINATIONS[lang], questions[0])]
            }
            forms.push(
                <VoteScreen
                    {...props}/>
            )
        }
        return forms;
    }

    getScreen() {
        let screens = [
            <StartScreen handler={this.screenHandler}/>,
            <SecondScreen handler={this.screenHandler}/>
        ];
        screens = screens.concat(this.makeForms(RU, 0));
        screens.push(<InternationalAirlineScreen skipHandler={this.skipHandler} handler={this.screenHandler}/>);
        screens = screens.concat(this.makeForms(EN, 1));
        screens.push(<FinallyForm handler={this.finallyHandler}/>);
        return screens[this.state.step]
    }

    skipHandler() {
        let step = this.state.step;
        step += questions.length + 1;
        this.setState({
            step: step
        })
    }

    finallyHandler(data, headers) {
        for(let key in data){
            console.log(data[key] + " " + headers[key]);
        }
        console.log(this.state);
    }

    screenHandler(name = null, datum = null) {
        let step = this.state.step;
        let data = this.state.data;
        if (name && datum) {
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
