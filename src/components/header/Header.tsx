import React from "react";
import './Header.css'

import logo from './tiv-logo.png'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="title">
                <div>2021</div>
                <div>Developer</div>
                <div>Survey</div>
            </div>
        </div>
    )
}