import React from "react";
import './SideNav.css';
import logo from './logo.jpg';

function SideNav (){
    return (
        <div className="sidenav">
            <img src={logo} alt="here should be a logo"/>
            <a>Dashboard</a>
            <a>Layouts</a>
            <b>PAGES</b>
            <a>Account</a>
            <a>Misc</a>
            <b>COMPONENTS</b>
            <a>Cards</a>
            <a>UI</a>
            <a>Extended UI</a>
            <a>Boxicons</a>
            <b>FORMS & TABLES</b>
            <a>Form Elements</a>
        </div>
    );
}

export default SideNav;