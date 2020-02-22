import React, {Component} from "react";
import Step from "../base/Step";
import {ALL_STEPS} from "../App";

class Stepper extends Component {
    render() {
        let items = [];
        for(let i=1; i<= ALL_STEPS; i++){
            items.push(<Step number={i} text={"Шаг"} isComplete={i<=this.props.step}/>)
        }
        return (
            <ul className="progress-tracker progress-tracker--text progress-tracker--center">
                {items}
            </ul>
        );
    }
}

export default Stepper;