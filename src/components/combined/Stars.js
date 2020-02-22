import React, {Component, Fragment} from "react";
import Button from "../base/Button";
import Star from "../base/Star";

class Stars extends Component {

    handler(data){
        this.props.onVoted(data)
    }

    render() {
        let stars = [];
        let vote = this.props.company.vote;
        for(let i=1; i<=5; i++){
            stars.push(<Star key={i} onClick={()=>{this.handler(i)}} isActive={vote && i <= vote}/>);
        }
        return (
            <Fragment>
                {stars}
            </Fragment>

        );
    }
}

export default Stars;