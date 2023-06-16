import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./map-page-filter-location.css";
const MapPageFilterLocation: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="map-page-filter-location">
      <div className="statusbar-iphone-13">
        <img className="notch-icon" alt="" src="/notch.svg" />
        <div className="left-side">
          <div className="statusbar-time">
            <div className="div8">9:41</div>
          </div>
        </div>
        <img className="right-side-icon" alt="" src="/right-side.svg" />
      </div>
      <div className="button12" onClick={onButtonContainerClick}>
        <img
          className="iconsolidchevron-left1"
          alt=""
          src="/iconsolidchevronleft1.svg"
        />
      </div>
      <div className="map-page-filter-location-inner">
        <div className="frame-parent28">
          <div className="basic-input-wrapper">
            <div className="basic-input2">
              <div className="input-text2">Location, state, city</div>
              <img className="iconsolidx" alt="" src="/iconsolidx.svg" />
            </div>
          </div>
          <div className="instance-parent">
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
            <div className="button-parent1">
              <div className="button13">
                <img className="point-map-icon" alt="" src="/point-map.svg" />
              </div>
              <div className="input-text3">China</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-example">
        <div className="mobile-tab">
          <div className="tab-2">Sale</div>
          <div className="mobile-tab-child" />
          <div className="mobile-tab-item" />
        </div>
        <div className="mobile-tab1">
          <div className="tab-1">Buy</div>
          <div className="mobile-tab-inner" />
        </div>
      </div>
    </div>
  );
};

export default MapPageFilterLocation;
