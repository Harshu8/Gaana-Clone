import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import ImageCarousel from "./Component/ImageCarousel";
import "./App.css";
import OneSongItem from "./Component/OneSongItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongItemRow from "./Component/SongItemRow";

const advertise = require("../src/Component/advertise.jpg");
// const img1 = require("../src/Component/ImageForTrendingSection/1.jpeg");
// const img2 = require("../src/Component/ImageForTrendingSection/2.jpeg");
// const img3 = require("../src/Component/ImageForTrendingSection/3.jpeg");
// const img4 = require("../src/Component/ImageForTrendingSection/4.jpeg");
// const img5 = require("../src/Component/ImageForTrendingSection/5.jpeg");
// const img6 = require("../src/Component/ImageForTrendingSection/6.jpeg");

function App() {
  return (
    <div className="mainContainer">
      <Navbar/>
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      
      <div className="OnePart">
        <div className="leftPart">
          

          <ImageCarousel className="myImageCarousel"/>  
          <SongItemRow/>
          {/* <h3 className="trendingSongHeading">Trending Song</h3>
          <div className="songListRow">
            <OneSongItem className="songItem" songIcon={img1} songName="Kesariya" />
            <OneSongItem className="songItem" songIcon={img2} songName="Peaches" />
            <OneSongItem className="songItem" songIcon={img3} songName="Left And Right (Feat. Jung Kook of BTS)" />
            <OneSongItem className="songItem" songIcon={img4} songName="Dil" />
            <OneSongItem className="songItem" songIcon={img5} songName="SYL" />
            <OneSongItem className="songItem" songIcon={img6} songName="Hot Shit (feat. Kanye West & Lil Durk" />
            
          </div> */}
          

        </div>

        <div className="rightPart">
          <img src={advertise} alt="" />
        </div>
      </div>

    </div>
  );
}

export default App;
