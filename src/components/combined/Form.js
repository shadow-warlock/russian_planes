import React, {Component, Fragment} from "react";
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
        let check = Object.values(selected).every((item) => {
            return item
        });
        if (this.props.selected && check && Object.keys(selected).length === Object.keys(this.props.selected).length) {
            this.props.handler(this.props.name, this.state.selected);
            return;
        }
        this.setState({
            selected: selected
        })
    }

    render() {
        let companies = this.props.companies;
        let disabled = this.props.selected || Object.values(this.state.selected).length === 0 || !Object.values(this.state.selected).every((item) => {
            return item
        });
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
                <div className={"text_center button_next_div"}>
                    <button
                        className={"button bg_yellow"}
                        disabled={disabled}
                        onClick={() => {
                            this.props.handler(this.props.name, this.state.selected);
                        }}>
                        {!disabled ? (<Fragment>Дальше <FontAwesomeIcon icon={faChevronRight}/></Fragment>) : ('Проголосуйте за 1-3 компании')}
                    </button>
                </div>
            </div>
        );
    }
}

export default Form;