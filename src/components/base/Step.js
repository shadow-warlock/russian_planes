import React, {Component} from "react";

class Step extends Component {
    render() {
        return (
            <li className={"progress-step " + this.props.isComplete}>
                <div className="progress-marker" data-text={this.props.number}/>
                <div className="progress-text">
                    <h4 className="progress-title">{this.props.text}</h4>
                </div>
            </li>
        );
    }
}

export default Step;