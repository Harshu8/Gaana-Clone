import React from 'react';
import "./NavbarStyleTrial.css";
import { FaSearch, FaLanguage } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

const logo = require("./image/gaana.jpeg");

 
const Navbar = () => {
    return (
        <div className='mynavbar'>
            <GoThreeBars id="threeBar"/>
            <img id="logo" src={logo} alt="img"/>
            <div className='mysearchBar'>
                <button id="searchIcon"><FaSearch/></button>
                <input id='input' type="text" placeholder='Search Artists, Songs, Albums ' />
            </div>
            <div className="myextraButton">
                <button className='mybutton myGoAdFreeButton'>Go Ad Free <span className="myextraButtonbadge">New</span> </button>
                <button className='mybutton myGetGaanaPlusButton'>Get Gaana Plus</button>
            </div>

            <div className='languageAndSignIn'>
                <FaLanguage id="languageConverterIcon"/>
                <BsMoon id="changeMode"/>
                <button id="logInSignUp">Log in / Sign Up</button>

            </div>

        </div>
)};

export default Navbar;