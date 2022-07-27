import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import ImageCarousel from "./Component/ImageCarousel";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongItemRow from "./Component/SongItemRow";
import CircularSongItemRow from "./Component/CircularSongItemRow";
import Footer from "./Component/Footer";

import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";

let trendingSongImage = [
  require("./Component/ImageForTrendingSection/1.jpeg"),
  require("./Component/ImageForTrendingSection/2.jpeg"),
  require("./Component/ImageForTrendingSection/3.jpeg"),
  require("./Component/ImageForTrendingSection/4.jpeg"),
  require("./Component/ImageForTrendingSection/5.jpeg"),
  require("./Component/ImageForTrendingSection/6.jpeg")
];
let trendingSongName = [
  "Kesariya",
  "Peaces",
  "Left And Right",
  "Galliyan Returns",
  "SYL",
  "Gimmie The Loot"
];

let newReleasesImage = [
  require("./Component/ImageForNewReleasesSection/1.jpeg"),
  require("./Component/ImageForNewReleasesSection/2.jpeg"),
  require("./Component/ImageForNewReleasesSection/3.jpeg"),
  require("./Component/ImageForNewReleasesSection/4.jpeg"),
  require("./Component/ImageForNewReleasesSection/5.jpeg"),
  require("./Component/ImageForNewReleasesSection/6.jpeg")
];

let newReleasesName = [
  "Brahmastra", "Straight Forward", "Breezy (Deluxe)","Ek Villain Returns", "Shiddat", "CLOSURE/CONTINUATION"
];



let topChartsImage = [
  require("./Component/ImageForTopChartsSection/1.jpeg"),
  require("./Component/ImageForTopChartsSection/2.jpeg"),
  require("./Component/ImageForTopChartsSection/3.jpeg"),
  require("./Component/ImageForTopChartsSection/4.jpeg"),
  require("./Component/ImageForTopChartsSection/5.jpeg"),
  require("./Component/ImageForTopChartsSection/6.jpeg")
];


let topChartsName = [
  "Hindi Top 50", "Punjabi Top 50", "International Top 50", "Hindi Romance Top 50", "Punjabi Romance Top 50", "EDM-Top 50"
];

let topSearchedArtistsImage = [
  require("./Component/ImageForTopSearchedArtistsSection/1.jpeg"),
  require("./Component/ImageForTopSearchedArtistsSection/2.jpeg"),
  require("./Component/ImageForTopSearchedArtistsSection/3.jpeg"),
  require("./Component/ImageForTopSearchedArtistsSection/4.jpeg"),
  require("./Component/ImageForTopSearchedArtistsSection/5.jpeg"),
  require("./Component/ImageForTopSearchedArtistsSection/6.jpeg")
];

let topSearchedArtistsName = [
  "Best Of Sidhu Moosewala", "Best Of Alan Walker", "Best Of Jubin Nautiyal", "Best Of Karan Aujla", "Best Of Arijit Singh", "Best Of Neha Kakkar"
];


let topPlaylistsImage = [
  require("./Component/ImageForTopPlaylistsSection/1.jpeg"),
  require("./Component/ImageForTopPlaylistsSection/2.jpeg"),
  require("./Component/ImageForTopPlaylistsSection/3.jpeg"),
  require("./Component/ImageForTopPlaylistsSection/4.jpeg"),
  require("./Component/ImageForTopPlaylistsSection/5.jpeg"),
  require("./Component/ImageForTopPlaylistsSection/6.jpeg")
];


let topPlaylistsName = [
  "90s Ka Solid Romance", "Best of Sidhu Moosewala", "Big Hits - English", "Love Storiyaan", "Big Hits - Punjabi", "International Top 50"
];


// let popularInHindiImage = [
//   "./ImageForTrendingSection/3.jpeg",
//   "./ImageForTrendingSection/4.jpeg",
//   "./ImageForTrendingSection/5.jpeg",
//   "./ImageForTrendingSection/1.jpeg",
//   "./ImageForTrendingSection/2.jpeg",
//   "./ImageForTrendingSection/6.jpeg",
//   "./ImageForTrendingSection/7.jpeg",
//   "./ImageForTrendingSection/8.jpeg"
// ];
let romanceImage = [
  require("./Component/ImageForRomanceSection/1.jpeg"),
  require("./Component/ImageForRomanceSection/2.jpeg"),
  require("./Component/ImageForRomanceSection/3.jpeg"),
  require("./Component/ImageForRomanceSection/4.jpeg"),
  require("./Component/ImageForRomanceSection/5.jpeg"),
  require("./Component/ImageForRomanceSection/6.jpeg")
];

let romanceName = [
  "Latest In Love", "B Praak - Romantic Hits", "First Love", "Love Hits", "HArry Sandhu- Romantic Hits", "2000s Love Hits"
];

let featuredArtistsImage = [
  require("./Component/ImageForFeaturedArtistsSection/1.jpeg"),
  require("./Component/ImageForFeaturedArtistsSection/2.jpeg"),
  require("./Component/ImageForFeaturedArtistsSection/3.jpeg"),
  require("./Component/ImageForFeaturedArtistsSection/4.jpeg"),
  require("./Component/ImageForFeaturedArtistsSection/5.jpeg"),
  require("./Component/ImageForFeaturedArtistsSection/6.jpeg")
];

let featuredArtistsName = [
  "Arijit Singh", "Pritam", "Tanishk Bagchi", "Neha Kakkar", "Badshah", "Yo Yo Honey Singh"
];

let radioImage = [
  require("./Component/ImageForRadioSection/1.jpeg"),
  require("./Component/ImageForRadioSection/2.jpeg"),
  require("./Component/ImageForRadioSection/3.jpeg"),
  require("./Component/ImageForRadioSection/4.jpeg"),
  require("./Component/ImageForRadioSection/5.jpeg"),
  require("./Component/ImageForRadioSection/6.jpeg")
];

let radioName = [
  "Love Hits", "Love Songs (Punjabi)", "Party Non Stop", "90s & 2000s (Bollywood)", "Workout (Punjabi)", "Morning Mix"
];

let justArrivedImage = [
  require("./Component/ImageForJustArrivedSection/1.jpeg"),
  require("./Component/ImageForJustArrivedSection/2.jpeg"),
  require("./Component/ImageForJustArrivedSection/3.jpeg"),
  require("./Component/ImageForJustArrivedSection/4.jpeg"),
  require("./Component/ImageForJustArrivedSection/5.jpeg"),
  require("./Component/ImageForJustArrivedSection/6.jpeg")
];

let justArrivedName = [
  "Latest In Sad Songs", "Just In Punjabi", "Punjabi LAtest Hits","Latest In Love", "Latest EDM- International", "New Releases Hindi"
];

let retroPlaylistsImage = [
  require("./Component/ImageForRetroPlaylistsSection/1.jpeg"),
  require("./Component/ImageForRetroPlaylistsSection/2.jpeg"),
  require("./Component/ImageForRetroPlaylistsSection/3.jpeg"),
  require("./Component/ImageForRetroPlaylistsSection/4.jpeg"),
  require("./Component/ImageForRetroPlaylistsSection/5.jpeg"),
  require("./Component/ImageForRetroPlaylistsSection/6.jpeg")
];

let retroPlaylistsName = [
  "Rimjhim Gire Sawan", "Retro Superhits", "Old Is Gold", "Supercool Old School", "Retro Romantic", "Classic Milds"
];

// let gaanaRecommendsImage = [
//   "./ImageForTrendingSection/1.jpeg",
//   "./ImageForTrendingSection/2.jpeg",
//   "./ImageForTrendingSection/3.jpeg",
//   "./ImageForTrendingSection/4.jpeg",
//   "./ImageForTrendingSection/5.jpeg",
//   "./ImageForTrendingSection/6.jpeg",
//   "./ImageForTrendingSection/7.jpeg",
//   "./ImageForTrendingSection/8.jpeg"
// ];

// let gaanaOriginalImage = [
//   "./ImageForTrendingSection/1.jpeg",
//   "./ImageForTrendingSection/2.jpeg",
//   "./ImageForTrendingSection/3.jpeg",
//   "./ImageForTrendingSection/4.jpeg",
//   "./ImageForTrendingSection/5.jpeg",
//   "./ImageForTrendingSection/6.jpeg",
//   "./ImageForTrendingSection/7.jpeg",
//   "./ImageForTrendingSection/8.jpeg"
// ];

// let startGallleryImage = [
//   "./ImageForTrendingSection/1.jpeg",
//   "./ImageForTrendingSection/2.jpeg",
//   "./ImageForTrendingSection/3.jpeg",
//   "./ImageForTrendingSection/4.jpeg",
//   "./ImageForTrendingSection/5.jpeg",
//   "./ImageForTrendingSection/6.jpeg",
//   "./ImageForTrendingSection/7.jpeg",
//   "./ImageForTrendingSection/8.jpeg"
// ];


const advertise = require("../src/Component/advertise.jpg");

function App() {

  const openNav = () => {
      console.log("open");
      document.getElementById("closeNavButton").style.display="unset";
      document.getElementById("threeBar").style.display="none";
      document.getElementById("myCustomSidebarMenu").style.cssText = `
      position: absolute;
      position: fixed;
      width: 18vw;
      height: 100%;
      z-index:2;
      background-color: white;
      padding-top: 2vw;
      display: flex;
      flex-direction: column;
      overflow: scroll;
    `;

      document.getElementById("remaingPartFromSideBarMenu").style.opacity=".8";

      // document.getElementById("closeNavButton").style.left="14.8vw";

  }
  const closeNav = () => {
      console.log("close");
      document.getElementById("myCustomSidebarMenu").style.display="none";
      document.getElementById("threeBar").style.display="unset";
      document.getElementById("remaingPartFromSideBarMenu").style.opacity="1";
      document.getElementById("closeNavButton").style.display="none";
  }

  return (
    <div className="mainContainer">
       <div id='myCustomSidebarMenu' className='sideNav'>

          <div className="loginAndClose">
            <ul className="sidebarMenuLoginTitle">
              <li className="sidebarMenuLogin"><BiUserCircle type="logo" size="3vw" className="userCircleIcon"/> Login / Sign Up</li>
              <AiOutlineClose id="closeNavButton" onClick={closeNav}/>
            </ul> 
          </div>
          
          <ul className="sidebarMenuItemList">
            
            <li className="sidebarMenuItem" id="sidebarMenuItemHome">Home</li>
            <li className="sidebarMenuItem">Radio</li>
            <li className="sidebarMenuItem">Podcast</li>
            <li className="sidebarMenuItem">My Music</li>
            <li className="sidebarMenuItem">India's Music</li>
            <li className="sidebarMenuItem">Language</li>
            <hr />
            <li className="sidebarMenuItem"><h6 className="h6InList">Go Premium</h6></li>
            <li className="sidebarMenuItem">India's Music</li>
            <li className="sidebarMenuItem">India's Music</li>
            <hr />
            <li className="sidebarMenuItem"><h6 className="h6InList">Quick Access</h6></li>
            <li className="sidebarMenuItem">Trending Songs</li>
            <li className="sidebarMenuItem">New Songs</li>
            <li className="sidebarMenuItem">Old Songs</li>
            <li className="sidebarMenuItem">Album</li>
            <li className="sidebarMenuItem">Artist</li>
            <li className="sidebarMenuItem">Lyrics</li>
            <li className="sidebarMenuItem">Music Labels</li>
            <li className="sidebarMenuItem">Genres</li>
          </ul>
        </div>
      <GoThreeBars id="threeBar" onClick={openNav}/>
      <div id="remaingPartFromSideBarMenu">

      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>

      <div className="OnePart">
        <div className="leftPart">
          <ImageCarousel className="myImageCarousel" />
          <SongItemRow titleName="Trending Songs" imageArray={trendingSongImage} songNameArray={trendingSongName} />
          <SongItemRow titleName="New Releases" imageArray={newReleasesImage} songNameArray={newReleasesName} />
          <SongItemRow titleName="Top Charts" imageArray={topChartsImage} songNameArray={topChartsName} />
          <SongItemRow titleName="Top Searched Artists" imageArray={topSearchedArtistsImage} songNameArray={topSearchedArtistsName} />
          <SongItemRow titleName="Top Playlists" imageArray={topPlaylistsImage} songNameArray={topPlaylistsName} />
          <SongItemRow titleName="Romance" imageArray={romanceImage} songNameArray={romanceName} />
          <CircularSongItemRow titleName="Featured Artists" imageArray={featuredArtistsImage} songNameArray={featuredArtistsName} />
          <CircularSongItemRow titleName="Radio" imageArray={radioImage} songNameArray={radioName} />

          <SongItemRow titleName="Just Arrived" imageArray={justArrivedImage} songNameArray={justArrivedName} />
          <SongItemRow titleName="Retro Playlists" imageArray={retroPlaylistsImage} songNameArray={retroPlaylistsName} />
          {/* <SongItemRow titleName="Gaana Recommends" imageArray={gaanaRecommendsImage} songNameArray={trendingSongName} />
          <SongItemRow titleName="Gaana Original" imageArray={gaanaOriginalImage} songNameArray={trendingSongName} />
          <SongItemRow titleName="Star Gallery" imageArray={startGallleryImage} songNameArray={trendingSongName} /> */}
          <Footer />
        </div>
        <div className="rightPart">
          <img src={advertise} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
