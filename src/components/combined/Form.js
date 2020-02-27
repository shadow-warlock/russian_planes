import React, {Component} from "react";
import Stars from "./Stars";
import "./../../assets/css/combined/Form/form.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

class Form extends Component {

    constructor(props) {
        super(props);
        let selected = {};
        if (this.props.selected) {
            for (let key in this.props.selected) {
                selected[key] = null;
            }
        }
        this.state = {
            selected: selected
        };
        this.onChoose = this.onChoose.bind(this);
        this.onVoted = this.onVoted.bind(this);
    }

    onChoose(name) {
        if (!this.props.selected) {
            let selected = this.state.selected;
            if (selected[name] !== undefined) {
                delete selected[name];
            } else if (Object.keys(selected).length < 3) {
                selected[name] = null;
            }
            this.setState({
                selected: selected
            });
        }
    }

    onVoted(name, vote) {
        let selected = this.state.selected;
        if (selected[name] !== undefined) {
            selected[name] = vote
        }
        let check = Object.keys(selected).length === 3;
        for (let key in selected) {
            if (!selected[key])
                check = false;
        }
        if (check) {
            this.props.handler(this.props.name, this.state.selected);
            return;
        }
        this.setState({
            selected: selected
        })
    }

    render() {
        let companies = this.props.companies;
        return (
            <div>
                <div className={"company_form"}>{
                    companies.map((company) => {
                        let stars = "";
                        let isSelected = this.state.selected[company];
                        if (isSelected !== undefined) {
                            stars = <Stars company={isSelected} onVoted={(vote) => {
                                this.onVoted(company, vote)
                            }}/>
                        }
                        return (
                            <div key={company} className={"company_position " + (isSelected ? "company_selected" : "")}
                                 onClick={() => {
                                     this.onChoose(company);
                                 }}>
                                <div>
                                    {company}
                                </div>
                                <div>{stars}</div>
                            </div>
                        )
                    })
                }
                </div>
                <div className={"text_center button_next_div"}>{this.props.selected ? "" :
                    <button disabled={true} className={"button bg_yellow"}>
                        Дальше <FontAwesomeIcon icon={faChevronRight}/>
                    </button>}
                </div>
            </div>
        );
    }
}

export default Form;