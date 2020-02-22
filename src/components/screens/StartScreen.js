import React, {Component} from "react";
import logoImage from "../../assets/img/screens/StartScreen/logo.svg"
import "../../assets/css/screens/StartScreen/start_screen.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

class StartScreen extends Component {
    render() {
        return (
            <div className={"start_screen default_padding"}>
                <div>
                    <img src={logoImage} alt={"logo"}/>
                </div>
                <div className={"start_screen_content"}>
                    <div>
                        <div>в рамках 23-й <br/> национальной авиационной премии «Крылья России</div>
                        <div className={"blue header"}>Народное голосование. Выбираем лучшую авиакомпанию 2019</div>
                        <div className={"display_flex"}>
                            <div>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <button>Проголосуй и выиграй приз*</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartScreen;