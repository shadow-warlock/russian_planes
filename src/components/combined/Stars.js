import React, {Component, Fragment} from "react";
import Star from "../base/Star";

class Stars extends Component {

    handler(data) {
        this.props.onVoted(data)
    }

    render() {
        let stars = [];
        let vote = this.props.company.vote;
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div className={"company_star"}>
                    <Star key={i}
                          onClick={() => {
                              this.handler(i)
                          }}
                          isActive={vote && i <= vote}/>
                </div>
            );
        }
        return (
            <div className={"display_flex"}>
                {stars}
            </div>
        );
    }
}

export default Stars;