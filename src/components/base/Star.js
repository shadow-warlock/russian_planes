import React, {Component} from "react";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Star extends Component {
    render() {
        return (
            <FontAwesomeIcon onClick={this.props.onClick} className={this.props.isActive? "yellow" : ""} icon={faStar}/>
        );
    }
}

export default Star;