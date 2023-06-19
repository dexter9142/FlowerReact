import React from 'react';
import {Link} from "react-router-dom";

function HeaderResponsive() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <Link to={"/"}>
                <img
                    className="the-logo-maker-built-for-1000"
                    alt=""
                    src="/the-logo-maker-built-for-1000-industries-and-20m-users@2x.png"
                />
                </Link>
                <div className="button7">
                    <img className="iconsolidmenu" alt="" src="/iconsolidmenu.svg" />
                </div>
            </div>
        </div>
    );
}

export default HeaderResponsive;