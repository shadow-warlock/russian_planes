import React, {Component} from "react";
import "../../assets/css/combined/Footer/footer.css"

import LAVT from "./../../assets/img/combined/Footer/LAVT.svg";
import ATO_transport from "./../../assets/img/combined/Footer/ATO_transport.svg";
import ATO from "./../../assets/img/combined/Footer/ATO.svg";
import aviaport from "./../../assets/img/combined/Footer/aviaport.svg";
import aviauspeh from "./../../assets/img/combined/Footer/aviauspeh.svg";
import BBT from "./../../assets/img/combined/Footer/BBT.svg";
import begishevo from "./../../assets/img/combined/Footer/begishevo.svg";
import biletix from "./../../assets/img/combined/Footer/biletix.svg";
import infomost from "./../../assets/img/combined/Footer/infomost.svg";
import interfax from "./../../assets/img/combined/Footer/interfax.svg";
import omsk from "./../../assets/img/combined/Footer/omsk.svg";
import sckyscanner from "./../../assets/img/combined/Footer/sckyscanner.svg";
import sletatru from "./../../assets/img/combined/Footer/sletatru.svg";
import travel_russian_news from "./../../assets/img/combined/Footer/travel_russian_news.svg";
import tui from "./../../assets/img/combined/Footer/tui.svg";
import votpusk from "./../../assets/img/combined/Footer/votpusk.svg";

class Footer extends Component {
    render() {
        return (
            <div className={"footer default_padding"}>
                <div className={"display_flex justify_content_between"}>
                    <div>
                        <div>Учредители</div>
                        <div className={"display_flex justify_content_between founders"}>
                            <img src={LAVT} alt={"logo"}/>
                            <img src={ATO_transport} alt={"logo"}/>
                            <img src={infomost} alt={"logo"}/>
                        </div>
                    </div>
                    <div>
                        <div>Генеральный информационный партнер</div>
                        <div className={"gen_info_center"}>
                            <img src={ATO} alt={"logo"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Информационные партнеры пассажирского голосования</div>
                    <div className={"display_flex information_partners"}>
                        <div><img src={aviaport} alt={"logo"}/></div>
                        <div><img src={travel_russian_news} alt={"logo"}/></div>
                        <div><img src={biletix} alt={"logo"}/></div>
                        <div><img src={tui} alt={"logo"}/></div>
                        <div><img src={BBT} alt={"logo"}/></div>
                        <div><img src={interfax} alt={"logo"}/></div>
                        <div><img src={sletatru} alt={"logo"}/></div>
                        <div><img src={votpusk} alt={"logo"}/></div>
                        <div><img src={aviauspeh} alt={"logo"}/></div>
                        <div><img src={begishevo} alt={"logo"}/></div>
                        <div><img src={omsk} alt={"logo"}/></div>
                        <div><img src={sckyscanner} alt={"logo"}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;