import React from "react";
import "./FooterStyle.css";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="mainDiv">
            <div className="start">
                <h1 className="mainHeading">Bas Bajna Chahiye Gaana</h1>
                <div className="mainParaDiv">
                    <p className="mainPara">Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>
                </div>

                <hr className="line"/>
                <div className="icons">
                    {/* <button className="fbIcon"><BsFacebook/></button> */}
                    <FaFacebookF className="fbIcon"/>
                    {/* <button  className="twitterIcon"><AiOutlineTwitter/></button> */}
                    <AiOutlineTwitter className="twitterIcon"/>
                </div>
                <hr className="line"/>
                <div className="someLinks">
                    <ul className="ulOfLink">
                        <li className="linkListItem">Advertise on Gaana.com</li>
                        <li className="linkListItem">Terms of Use</li>
                        <li className="linkListItem">Privacy Policy</li>
                        <li className="linkListItem">Partners</li>
                        <li className="linkListItem">Sitemap</li>
                        <li className="linkListItem">FAQ</li>
                    </ul>
                </div>
                <hr className="line"/>
            <p className="headingQuicklinks">Quicklinks</p>
            </div>
            
            <div className="controlAllDivs">
                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Albums</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>

                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Genres</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>

                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Artists</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>


                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">New Release</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>
            </div>


            <div className="controlAllDivs">
                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Trending Songs</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>

                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Trending Albums</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>

                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Lyrics</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>


                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Old Songs</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>
            </div>


            <div className="controlAllDivs">
                <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Video</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div>

                {/* <div className="quicklinksDiv">
                    <div>
                        <p className="quicklinksTitle">Podcasts</p>
                        <p className="quicklinksSubtitle">English</p>
                        <p className="quicklinksSubtitle">Hindi</p>
                        <p className="quicklinksSubtitle">Telgu</p>
                        <p className="quicklinksSubtitle">Punjabi</p>
                        <p className="quicklinksSubtitle">Tamil</p>
                        <p className="viewAll">View all</p>
                    </div>
                </div> */}
            </div>
            
            <hr className="lineCopyrightPara"/>
            <div className="lastDiv">
                <p className="copyrightPara">&copy; Gamma Gaana Ltd. 2022, All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;