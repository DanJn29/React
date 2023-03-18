import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css"
import overviewIcon from '../img/Vector.svg'
import csvIcon from '../img/csvIcon.svg'
import trafficIcon from '../img/Shape.svg'
import icon from '../img/icon.svg'

const WebLayout = ({ children }) => {
    const location = useLocation();
    return (
    <div className="layoutWrapper">
        <div className='leftside'>
            <div className="logo"><img src={icon} alt="" /></div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/traffic" style={{color: location.pathname === "/traffic" ? "#0062FF" : "black"}}>
                            <img src={trafficIcon} alt="" style={{filter: location.pathname === "/traffic" ? "brightness(0) saturate(100%) invert(29%) sepia(81%) saturate(5435%) hue-rotate(213deg) brightness(101%) contrast(107%)" : "none"}}/>
                            Traffic
                        </Link>
                    </li>
                    <li>
                        <Link to="/overview" style={{color: location.pathname === "/overview" ? "#0062FF" : "black"}}>
                            <img src={overviewIcon} alt="" style={{filter: location.pathname === "/overview" ? "brightness(0) saturate(100%) invert(29%) sepia(81%) saturate(5435%) hue-rotate(213deg) brightness(101%) contrast(107%)" : "none"}}/>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to="/csv" style={{color: location.pathname === "/csv" ? "#0062FF" : "black"}}>
                            <img src={csvIcon} alt="" style={{filter: location.pathname === "/csv" ? "brightness(0) saturate(100%) invert(29%) sepia(81%) saturate(5435%) hue-rotate(213deg) brightness(101%) contrast(107%)" : "none"}}/>
                            CSV
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='rightside'>
            <div className="header"></div>
            <div className="content">{children}</div>
        </div>
    </div>
    );
};

export default WebLayout;
