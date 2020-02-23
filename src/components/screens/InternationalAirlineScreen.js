import React, {Component} from "react";
import Button from "../base/Button";

class InternationalAirlineScreen extends Component {
    render() {
        return (
            <div className={"bg_yellow default_padding second_screen"}>
                <div className={"header margin_bottom_4"}> Номинация «Зарубежная авиакомпания года <br/>— лидер
                    пассажирских симпатий»
                </div>
                <div className={"text_center margin_bottom_4 padding_top_4"}>Вы пользовались услугами иностранных
                    авиакомпаний в 2019 году ?
                </div>
                <div className={"text_center display_flex"}>
                    <Button className={"bg_white margin_bottom_4"}>Да</Button>
                    <Button className={"bg_white margin_bottom_4"}>Нет</Button>
                </div>
            </div>
        );
    }
}

export default InternationalAirlineScreen;