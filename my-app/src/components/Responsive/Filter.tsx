import { FunctionComponent, useCallback } from "react";
import {Link, useNavigate} from "react-router-dom";
import "./map-page-filter.css";
const Filter: FunctionComponent = () => {
    const navigate = useNavigate();

    const onButtonContainerClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="map-page-filter">
            <div className="statusbar-iphone-131">
                <img className="notch-icon1" alt="" src="/notch.svg" />
                <div className="left-side1">
                    <div className="statusbar-time1">
                        <div className="div9">9:41</div>
                    </div>
                </div>
                <img className="right-side-icon1" alt="" src="/right-side.svg" />
            </div>
            <div className="button19" onClick={onButtonContainerClick}>
                <img className="iconsolidx1" alt="" src="/iconsolidx1.svg" />
            </div>
            <div className="map-page-filter-inner">
                <div className="where-parent">
                    <div className="where">Where?</div>
                    <div className="basic-input3">
                        <div className="input-text9">Location, state, city</div>
                    </div>
                    <div className="accordionframe-2435-parent">
                        <div className="accordionframe-2435">
                            <div className="accordionframe-2435-inner">
                                <div className="image-75-parent7">
                                    <div className="image-759" />
                                    <div className="headline9">Flower</div>
                                    <div className="frame-child28" />
                                </div>
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                    </div>
                    <div className="frame-child32" />
                    <div className="accordionframe-2435-group">
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                    </div>
                    <div className="accordionframe-2435-group">
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                        <div className="accordionframe-2436">
                            <div className="image-75-parent7">
                                <div className="image-759" />
                                <div className="headline9">Flower</div>
                                <div className="frame-child28" />
                            </div>
                        </div>
                    </div>

                    <div className="button20">
                        <div className="text7">Search</div>
                    </div>

                </div>
            </div>
            <div className="tab-example1">
                <div className="mobile-tab2">
                    <div className="tab-21">Sale</div>
                    <div className="mobile-tab-child1" />
                    <div className="mobile-tab-child2" />
                </div>
                <div className="mobile-tab3">
                    <div className="tab-11">Buy</div>
                    <div className="mobile-tab-child3" />
                </div>
            </div>
        </div>
    );
};

export default Filter;
