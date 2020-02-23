import React, {Component} from "react";
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
                <Star key={i}
                      className={"company_star"}
                      onClick={(e) => {
                          this.handler(i);
                          e.stopPropagation();
                      }}
                      isActive={vote && i <= vote}/>
            );
        }
        return (
            <div className={"display_flex company_stars"}>
                {stars}
            </div>
        );
    }
}

export default Stars;