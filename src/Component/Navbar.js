import React, {useState} from 'react';
import { Link,BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { useHistory } from "react-router-dom";
import "./NavbarStyleTrial.css";
import { FaSearch, FaLanguage } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";


const logo = require("./image/gaana.jpeg");



const Navbar = () => {

    // const openNav = () => {
    //     console.log("open from navbar");
    //     document.getElementById("myCustomSidebarMenu").style.cssText = `
    //     width: 10vw;
    //     height: 100%;
    //     background-color: red; 
    //     position: absolute;
    //   `;

        // document.getElementById("")
    // }
    
    // const closeNav = () => {
    //     console.log("close");
    //     document.getElementById("myCustomSidebarMenu").style.width="0";
    // }

    // const [sidebar, setSidebar]= useState(false);

    // const showSidebar = () => {
    //     setSidebar(!sidebar);
    // }

    return (
        <div className='mynavbar'>
            
           {/* <Link to="#" className="menu-bar">
           </Link> */}

           {/* <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
           </nav> */}

           
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