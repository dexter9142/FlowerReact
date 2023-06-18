import React from 'react';
import { Link } from 'react-router-dom'

function Searchbar() {
    return (
        <div className="basic-input-group">
            <div className="basic-input4">
                <div className="input-left-content1">
                    <img
                        className="iconoutlinesearch1"
                        alt=""
                        src="/iconoutlinesearch1.svg"
                    />
                    <div className="input-text10"><input type={"text"}></input></div>
                </div>
            </div>
            <Link to={"/map-filter"}>
            <div className="iconoutlinefilter-wrapper">
                <img
                    className="iconoutlinesearch1"
                    alt=""
                    src="/iconoutlinefilter.svg"
                />
            </div>
            </Link>
        </div>
    );
}

export default Searchbar;