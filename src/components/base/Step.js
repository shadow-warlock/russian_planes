import React, {Component} from "react";
import {ALL_STEPS} from "../App";

class Step extends Component {
    render() {
        return (
            <li style={{"width": 100/ALL_STEPS + "%"}} className={(this.props.isComplete ? "active" : "") + (this.props.isLastComplete ? " last": "") }>
                <div className={"progressbar-item-text"}>{this.props.text}</div>
            </li>
        );
    }
}

export default Step;