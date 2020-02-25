import React, {Component, Fragment} from "react";
import okImage from "./../../assets/img/screens/FinalFormScreen/ok.svg"
import failImage from "./../../assets/img/screens/FinalFormScreen/fail.svg"
import ym from 'react-yandex-metrika';

export const formHeaders = {
    name: "Имя",
    surname: "Фамилия",
    phone: "Телефон",
    email: "E-mail",
    city: "Город"
};

const EMPTY_FIELD = "empty filed";
const CONFIRM18 = "confirm18";
const ACCEPT = "accept";
const WAIT = "wait";

class FinalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            phone: "",
            email: "",
            city: "",
            result: null,
            accept: false,
            confirm18: false,
        }
    }

    render() {
        let disabled = this.state.result === 200 || this.state.result === 403 || this.state.result === WAIT;
        let fields = [];
        for (let key in formHeaders) {
            fields.push(
                <div key={key} className={"display_flex justify_content_between form_element"}>
                    {formHeaders[key]}
                    <div className={"display_flex"}>
                        <input disabled={disabled} onChange={(e) => {
                            let newState = {};
                            newState[key] = e.target.value;
                            this.setState(newState);
                        }}/>
                        {this.state[key] ? <img src={okImage} alt={""}/> : <img src={failImage} alt={""}/>}
                    </div>
                </div>
            );
        }
        let message = "";
        switch (this.state.result) {
            case null:
                break;
            case 200:
                message = "Спасибо! ваш голос принят!";
                break;
            case 403:
                message = "Вы уже голосовали!";
                break;
            case EMPTY_FIELD:
                message = "Заполните все поля!";
                break;
            case WAIT:
                message = "Обработка...";
                break;
            case ACCEPT:
                message = "Примите условия пользовательского соглашения!";
                break;
            case CONFIRM18:
                message = "Подтвердите, что вам есть 18 лет!";
                break;
            default:
                message = "Произошла ошибка!";
                break;
        }
        return (
            <Fragment>
                {fields}
                <label className={"agreement"}>
                    <input disabled={disabled}
                           checked={this.state.accept}
                           onChange={(e) => {
                               this.setState({accept: e.target.checked})
                           }}
                           type={"checkbox"}/>
                    <div>Я принимаю Условия Пользовательского Соглашения и даю свое согласие
                        ATO.RU на обработку моей персональной информации на условиях определенных Политикой
                        конфиденциальности.</div>
                </label>
                <br/>
                <label className={"agreement"}>
                    <input
                        disabled={disabled}
                        checked={this.state.confirm18}
                        onChange={(e) => {
                            this.setState({confirm18: e.target.checked})
                        }}
                        type={"checkbox"}/>
                    <div>Я подтверждаю что мне есть 18 лет.</div>
                </label>
                <br/>
                <button disabled={disabled}
                        className={"final_form_button"}
                        onClick={() => {
                            if (!this.state.accept) {
                                this.setState({
                                    result: ACCEPT
                                });
                                return;
                            }
                            if (!this.state.confirm18) {
                                this.setState({
                                    result: CONFIRM18
                                });
                                return;
                            }
                            if (this.state.name && this.state.surname && this.state.phone && this.state.email && this.state.city) {
                                this.setState({
                                    result: WAIT
                                });
                                this.props.handler(this.state, formHeaders, (result) => {
                                    if(result === 200){
                                        ym('reachGoal', 'form');
                                    }
                                    this.setState({
                                        result: result
                                    })
                                });
                            } else {
                                this.setState({
                                    result: EMPTY_FIELD
                                })
                            }
                        }}>
                    Участвовать в розыгрыше призов
                </button>
                <br/>
                <div className={"result_message"}>{message}</div>
            </Fragment>
        );
    }
}

export default FinalForm;