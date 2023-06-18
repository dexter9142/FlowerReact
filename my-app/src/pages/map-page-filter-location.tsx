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
      <div className="map-page-filter-location-inner">
        <div className="frame-parent28">
          <div className="basic-input-wrapper">
            <div className="basic-input2">
              <div className="input-text2"><input type="text"></input></div>
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

    </div>
  );
};

export default MapPageFilterLocation;
