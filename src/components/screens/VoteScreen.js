import React, {Component} from "react";
import Stepper from "../combined/Stepper";
import Form from "../combined/Form";

class VoteScreen extends Component {
    render() {
        return (
            <div className={"vote_screen"}>
                <div>{this.props.nomination}</div>
                <Stepper step={this.props.step}/>
                <div className={"blue"}>{this.props.question}</div>
                <div>
                    <Form name={this.props.nomination + "_" + this.props.question}
                          selected={this.props.company}/>
                </div>
            </div>
        );
    }
}

export default VoteScreen;