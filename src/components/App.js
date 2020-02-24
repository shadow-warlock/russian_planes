import React, {Component} from 'react';
import '../assets/css/App/App.css';
import '../assets/css/App/mobile.css';
import StartScreen from "./screens/StartScreen";
import Footer from "./combined/Footer";
import ruCompaniesUrl from "./../assets/json/ru_companies";
import enCompaniesUrl from "./../assets/json/en_companies";
import questionsUrl from "./../assets/json/questions";
import VoteScreen from "./screens/VoteScreen";
import SecondScreen from "./screens/SecondScreen";
import InternationalAirlineScreen from "./screens/InternationalAirlineScreen";
import FinalFormScreen from "./screens/FinalFormScreen";
import axios from "axios";

export let ALL_STEPS = 0;
export const RU_NOMINATION = "Российская авиакомпания года - лидер пассажирских симпатий";
export const EN_NOMINATION = "Зарубежная авиакомпания года - лидер пассажирских симпатий";
export const NOMINATIONS = {
    "ru": RU_NOMINATION,
    "en": EN_NOMINATION
};
export let COMPANIES = {
    "ru": [],
    "en": []
};

export let questions = [];
fetch(questionsUrl)
    .then(response => response.json())
    .then(data => {
        questions = data;
        ALL_STEPS = questions.length * 2;
    });
export let ruCompanies = [];
fetch(ruCompaniesUrl)
    .then(response => response.json())
    .then(data => {
        ruCompanies = data;
        COMPANIES[RU] = ruCompanies;
    });
export let enCompanies = [];
fetch(enCompaniesUrl)
    .then(response => response.json())
    .then(data => {
        enCompanies = data;
        COMPANIES[EN] = enCompanies;
    });


export const RU = "ru";
export const EN = "en";

export const DELIMITER = "NAME_DELIMITER";

export function makeName(nomination, question) {
    return nomination + DELIMITER + question;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            blink: false,
            data: {}
        };
        this.getScreen = this.getScreen.bind(this);
        this.screenHandler = this.screenHandler.bind(this);
        this.finallyHandler = this.finallyHandler.bind(this);
        this.skipHandler = this.skipHandler.bind(this);
        this.makeTable = this.makeTable.bind(this);
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
                props.selected = this.state.data[makeName(NOMINATIONS[lang], questions[0])];
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
        screens.push(<FinalFormScreen handler={this.finallyHandler}/>);
        return screens[this.state.step]
    }

    skipHandler() {
        let step = this.state.step;
        step += questions.length + 1;
        this.setState({
            step: step
        })
    }

    finallyHandler(data, headers, callback) {
        let message = "Данные пользователя:<br>";
        for (let key in data) {
            message += headers[key] + ": " + data[key] + "<br>";
        }
        message += this.makeTable(RU);
        message += this.makeTable(EN);
        axios.post("http://survey.xyzz.ru/mail.php", {text: message}).then((result) => {
            callback(200);
        }).catch((error) => {
            callback(error.request.status);
        });

    }

    makeTable(lang) {
        let message = "";
        let index = Object.keys(this.state.data).findIndex((item) => {
            return item.startsWith(NOMINATIONS[lang]);
        });
        if (index !== -1) {
            message += "<br><br>" + NOMINATIONS[lang] + "<br>";
            let selectedCompanies = Object.keys(this.state.data[Object.keys(this.state.data)[index]]);
            message += "<br><br>";
            message += `<style>table td {border:1px solid black}</style>`;
            message += "<table>";
            message += `<thead>`;
            message += `<th>Вопросы</th>`;
            selectedCompanies.forEach(item => {
                message += `<th>${item}</th>`
            });
            message += `</thead>`;
            for (let key in this.state.data) {
                if (key.startsWith(NOMINATIONS[lang])) {
                    message += `<tr>`;
                    let question = key.split(DELIMITER)[1];
                    message += `<td>${question}</td>`;
                    for (let key2 in this.state.data[key]) {
                        message += `<td>${this.state.data[key][key2]}</td>`;
                    }
                    message += `</tr>`;
                }
            }
            message += "</table>";
        }
        return message;
    }

    screenHandler(name = null, datum = null) {
        window.scrollTo(0, 0);
        let step = this.state.step;
        step++;
        if (name && datum) {
            let data = this.state.data;
            data[name] = datum;
            this.setState({
                data: data,
                blink: true
            });
            setTimeout(() => {
                this.setState({
                    blink: false,
                    step: step
                });
            }, 100);
        } else {
            this.setState({
                step: step
            });
        }
    }


    render() {
        return (
            <div className={this.state.blink ? "bg_yellow" : ""}>
                {this.getScreen()}
                <Footer/>
            </div>
        );
    }
}

export default App;
