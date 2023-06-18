import { FunctionComponent } from "react";
import styles from "./map-page1.module.css";
const TopNavbar: FunctionComponent = () => {
    return (
        <div className="component-11">
            <div className="frame-parent">
                <div className="basic-input-parent">
                    <div className="basic-input">
                        <div className="input-text">Location</div>
                    </div>
                    <div className="basic-input1">
                        <div className="input-left-content">
                            <img
                                className="iconoutlinesearch"
                                alt=""
                                src="/iconoutlinesearch.svg"
                            />
                            <div className="tandem-tractor">
                                <input type="text"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-parent">
                    <button onClick={() => {alert("Give Five")}} className="button">

                        <div className="text">
                            Give five</div>
                    </button>
                    <button onClick={() => {alert("Notification Bell")}} className="button1">
                        <img
                            className="iconoutlinebell"
                            alt=""
                            src="/iconoutlinebell.svg"
                        />
                    </button>
                    <div className="button-group">
                        <button onClick={() => {alert("Profile")}}className="button2">
                            <div className="photo">
                                <img className="face-37-icon" alt="" src="/face-37@2x.png" />
                            </div>
                            <div className="text">Profile</div>
                        </button>
                        <div className="button3">
                            <img
                                className="iconoutlinebell"
                                alt=""
                                src="/iconsolidmenu.svg"
                            />
                        </div>
                    </div>
                    <div className="frame-child" />
                </div>
                <button onClick={() => {alert("Home")}} className="the-logo-maker-built-for-1000" />
            </div>
        </div>
    );
};

export default TopNavbar;
