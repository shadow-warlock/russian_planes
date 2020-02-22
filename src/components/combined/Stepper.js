import React, {Component} from "react";
import Step from "../base/Step";
import {ALL_STEPS} from "../App";
import "../../assets/css/combined/Stepper/stepper.css"

class Stepper extends Component {
    render() {
        let items = [];
        for(let i=1; i<= ALL_STEPS; i++){
            items.push(<Step key={i} text={"Шаг"} isComplete={i<=this.props.step} isLastComplete={i===this.props.step}/>)
        }
        return (
            <ul className="progressbar">
                {items}
            </ul>
        );
    }
}

export default Stepper;