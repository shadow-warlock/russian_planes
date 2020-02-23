import React, {Component, Fragment} from "react";
import Button from "../base/Button";

export const formHeaders = {
    name: "Имя",
    surname: "Фамилия",
    phone: "Телефон",
    email: "E-mail",
    city: "Город"
};

class FinallyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            surname:"",
            phone:"",
            email:"",
            city:""
        }
    }

    render() {
        let fields = [];
        for (let key in this.state){
            fields.push(
                <Fragment key={key}>
                    {formHeaders[key]}
                    <input onChange={(e)=>{
                        let newState = {};
                        newState[key] = e.target.value;
                        this.setState(newState);
                    }}/>
                </Fragment>
            );
        }
        return (
            <Fragment>
                {fields}
                <Button onClick={()=>{
                    if(this.state.name && this.state.surname && this.state.phone && this.state.email && this.state.city){
                        this.props.handler(this.state, formHeaders);
                    }
                }}>
                    Отправить
                </Button>
            </Fragment>
        );
    }
}

export default FinallyForm;