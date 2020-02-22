import React, {Component} from "react";
import logoImage from "./../../assets/img/logo.svg"
import "../../assets/css/StartScreen/start_screen.css"

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
                        <div>
                            <div>ЗВЕЗДЫ</div>
                            <button>Проголосуй и выиграй приз*</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartScreen;