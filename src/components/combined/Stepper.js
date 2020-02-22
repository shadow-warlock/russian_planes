import React, {Component} from "react";
import Step from "../base/Step";
import {ALL_STEPS} from "../App";
import "./../../assets/css/base/stepper.css"

class Stepper extends Component {
    render() {
        let items = [];
        for(let i=1; i<= ALL_STEPS; i++){
            console.log(i<=this.props.step);
            items.push(<Step key={i} text={"Шаг"} isComplete={i<=this.props.step}/>)
        }
        return (
            <ul className="progressbar">
                {items}
            </ul>
        );
    }
}

export default Stepper;