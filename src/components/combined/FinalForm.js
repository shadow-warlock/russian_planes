import React, {Component, Fragment} from "react";
import Button from "../base/Button";

export const formHeaders = {
    name: "Имя",
    surname: "Фамилия",
    phone: "Телефон",
    email: "E-mail",
    city: "Город"
};

class FinalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            phone: "",
            email: "",
            city: ""
        }
    }

    render() {
        let fields = [];
        for (let key in this.state) {
            fields.push(
                <div key={key} className={"display_flex justify_content_between form_element"}>
                    {formHeaders[key]}
                    <input onChange={(e) => {
                        let newState = {};
                        newState[key] = e.target.value;
                        this.setState(newState);
                    }}/>
                </div>
            );
        }
        return (
            <Fragment>
                {fields}
                <label className={"agreement"}><input type={"checkbox"}/>Я принимаю Условия Пользовательского Соглашения и даю свое согласие
                    ATO.RU на обработку моей персональной информации на условиях определенных Политикой
                    конфиденциальности.</label>
                <br/>
                <label className={"agreement"}><input type={"checkbox"}/>Я подтверждаю что мне есть 18 лет.</label>
                <br/>
                <button className={"final_form_button"} onClick={() => {
                    if (this.state.name && this.state.surname && this.state.phone && this.state.email && this.state.city) {
                        this.props.handler(this.state, formHeaders);
                    }
                }}>
                    Участвовать в розыгрыше призов
                </button>
            </Fragment>
        );
    }
}

export default FinalForm;