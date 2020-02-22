import React, {Component} from "react";
import Stepper from "../combined/Stepper";
import Form from "../combined/Form";
import "./../../assets/css/screens/VoteScreen/vote_screen.css";

class VoteScreen extends Component {
    render() {
        return (
            <div className={"vote_screen default_padding"}>
                <div className={"text_center margin_bottom_4"}>{this.props.nomination}</div>
                <Stepper step={this.props.step}/>
                <div className={"blue text_center margin_bottom_4"}>{this.props.question}</div>
                <div className={"margin_bottom_4"}>
                    <Form name={this.props.nomination + "_" + this.props.question}
                          handler={this.props.handler}
                          companies={this.props.companies}
                          selected={this.props.selected}/>
                </div>
            </div>
        );
    }
}

export default VoteScreen;