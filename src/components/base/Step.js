import React, {Component} from "react";

class Step extends Component {
    render() {
        return (
            <li className={this.props.isComplete ? "active" : ""}>
                <div className={"progressbar-item-text"}>{this.props.text}</div>
            </li>
        );
    }
}

export default Step;