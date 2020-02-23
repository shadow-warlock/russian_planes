import React, {Component} from "react";
import FinalForm from "../combined/FinalForm";
import "./../../assets/css/screens/FinalFormScreen/final_form_screen.css";

class FinalFormScreen extends Component {
    render() {
        return (
            <div className={"display_flex final_form_screen justify_content_between default_padding"}>
                <div className={"default_padding women_with_case"}>
                    <div className={"header"}>Участвовать в <br/> розыгрыше призов<br/> от спонсоров
                    </div>
                </div>
                <div className={"default_padding final_form_div"}>
                    <div className={"margin_bottom_4"}>Принять участие</div>
                    <FinalForm handler={this.props.handler}/>
                </div>
            </div>
        );
    }
}

export default FinalFormScreen;