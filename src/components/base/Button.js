import React, {Component} from "react";
import "./../../assets/css/base/Button/button.css"

class Button extends Component {
    render() {
        return (
            <button className={"button " + this.props.className} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

export default Button;