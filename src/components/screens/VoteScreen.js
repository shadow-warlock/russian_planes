import React, {Component} from "react";
import Stepper from "../combined/Stepper";
import Form from "../combined/Form";
import "./../../assets/css/screens/VoteScreen/vote_screen.css";
import {makeName} from "../App";

class VoteScreen extends Component {
    render() {
        return (
            <div className={"vote_screen default_padding"}>
                <div className={"text_center margin_bottom_4 bold"}>{this.props.nomination}</div>
                <Stepper step={this.props.step}/>
                <div className={"blue text_center margin_bottom_4 bold"}>{this.props.question}</div>
                <div className={"margin_bottom_4"}>
                    <Form name={makeName(this.props.nomination, this.props.question)}
                          handler={this.props.handler}
                          companies={this.props.companies}
                          selected={this.props.selected}/>
                </div>
            </div>
        );
    }
}

export default VoteScreen;