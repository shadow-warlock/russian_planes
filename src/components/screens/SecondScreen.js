import React, {Component} from "react";
import Button from "../base/Button";
import "./../../assets/css/screens/SecondScreen/second_screen.css";

class SecondScreen extends Component {
    render() {
        return (
            <div className={"bg_yellow default_padding second_screen"}>
                <div className={"header margin_bottom_4"}> Номинация «Российская авиакомпания года <br/> — лидер пассажирских симпатий»</div>
                <div className={"text_center margin_bottom_4 padding_top_4"}>Выберите и оцените 3 авиакомпании</div>
                <div className={"text_center"}>
                    <Button onClick={this.props.handler} className={"bg_white margin_bottom_4"}>Голосовать</Button>
                </div>
            </div>
        );
    }
}

export default SecondScreen;