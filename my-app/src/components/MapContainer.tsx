import { FunctionComponent } from "react";
import styles from "./map-page1.module.css";
const MapContainer: FunctionComponent = () => {
    return (
        <div className="map-container">
            <div className="button4">
                <img
                    className="iconsolidchevron-left"
                    alt=""
                    src="/iconsolidchevronleft.svg"
                />
            </div>
            <div className="group-div">
                <div className="button5">
                    <img
                        className="iconsolidchevron-left"
                        alt=""
                        src="/iconoutlineplus.svg"
                    />
                </div>
                <div className="button6">
                    <img
                        className="iconsolidchevron-left"
                        alt=""
                        src="/iconsolidminus.svg"
                    />
                </div>
            </div>
            <img className="image-76-icon" alt="" src="/image-76@2x.png" />
            <div className="component-13" id="priceButton" onClick={()=> alert("Price button")}>
                <div className="text">10$</div>
            </div>
            <div className="component-14" id="priceButton" onClick={()=> alert("Price button")}>
                <div className="text">10$</div>
            </div>
            <div className="component-15" id="priceButton" onClick={()=> alert("Price button")}>
                <div className="text">10$</div>
            </div>
            <div className="component-16" id="priceButton" onClick={()=> alert("Price button")}>
                <div className="text">5$</div>
            </div>
        </div>
    );
};

export default MapContainer;
