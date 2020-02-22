import React, {Component} from "react";
import logoImage from "../../assets/img/screens/StartScreen/logo.svg"
import "../../assets/css/screens/StartScreen/start_screen.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Button from "../base/Button";

class StartScreen extends Component {
    render() {
        return (
            <div className={"start_screen default_padding"}>
                <div className={"margin_bottom_4"}>
                    <img src={logoImage} alt={"logo"}/>
                </div>
                <div className={"start_screen_content"}>
                    <div>
                        <div className={"margin_bottom_4"}>в рамках 23-й <br/> национальной авиационной премии «Крылья
                            России
                        </div>
                        <div className={"blue header margin_bottom_4"}>Народное голосование.<br/> Выбираем
                            лучшую <br/> авиакомпанию
                            2019
                        </div>
                        <div className={"display_flex margin_bottom_4"}>
                            <div className={"stars"}>
                                <FontAwesomeIcon className={"yellow"} icon={faStar}/>
                                <FontAwesomeIcon className={"yellow"} icon={faStar}/>
                                <FontAwesomeIcon className={"yellow"} icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <Button className={"bg_yellow"} onClick={this.props.handler}>Проголосуй <br/>и выиграй приз*</Button>
                        </div>
                        <div className={"little_text"}>*Участвовать в розыгрыше призов могут только лица, достигшие
                            18-ти летнего возраста
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartScreen;