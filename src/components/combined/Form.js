import React, {Component, Fragment} from "react";
import Stars from "./Stars";
import "./../../assets/css/combined/Form/form.css";

class Form extends Component {

    constructor(props) {
        super(props);
        let selected = {};
        console.log(this.props.fixed);
        if (this.props.fixed) {
            console.log(this.props.selected);
            for (let key in this.props.selected) {
                selected[key] = this.props.selected[key];
                selected[key].vote = null;
                console.log(selected);
            }
        }
        this.state = {
            selected: selected
        };
        this.onChoose = this.onChoose.bind(this);
        this.onVoted = this.onVoted.bind(this);
    }

    onChoose(id, name) {
        if (!this.props.fixed) {
            let selected = this.state.selected;
            if (selected[id]) {
                delete selected[id];
            } else if (Object.keys(selected).length < 3) {
                selected[id] = {id: id, vote: null, name: name};
            }
            this.setState({
                selected: selected
            });
        }
    }

    onVoted(id, vote) {
        let selected = this.state.selected;
        if (selected[id]) {
            selected[id].vote = vote
        }
        let check = Object.keys(selected).length === 3;
        for (let key in selected) {
            if (!selected[key].vote)
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
            <div className={"company_form"}>{
                companies.map((company, id) => {
                    let stars = "";
                    let isSelected = this.state.selected[id]
                    if (isSelected) {
                        stars = <Stars company={isSelected} onVoted={(vote) => {
                            this.onVoted(id, vote)
                        }}/>
                    }
                    return (
                        <div key={id} className={"company_position " + (isSelected ? "company_selected" : "")}>
                            <div onClick={() => {
                                this.onChoose(id, company)
                            }}>
                                {company}
                            </div>
                            <div>{stars}</div>
                        </div>
                    )
                })
            }</div>
        );
    }
}

export default Form;