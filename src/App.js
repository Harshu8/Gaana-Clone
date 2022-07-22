import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import ImageCarousel from "./Component/ImageCarousel";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongItemRow from "./Component/SongItemRow";
import CircularSongItemRow from "./Component/CircularSongItemRow";
import Footer from "./Component/Footer";

const advertise = require("../src/Component/advertise.jpg");

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
          <SongItemRow titleName="Trending Songs" />
          <SongItemRow titleName="New Releases" />
          <SongItemRow titleName="Top Charts" />
          <SongItemRow titleName="Top Searched Artists" />
          <SongItemRow titleName="Top Playlists" />
          <SongItemRow titleName="Romance" />
          <CircularSongItemRow titleName="Featured Artists"/>
          <CircularSongItemRow titleName="Radio"/>
          
          <SongItemRow titleName="Just Arrived" />
          <SongItemRow titleName="Retro Playlists" />
          <SongItemRow titleName="Gaana Recommends" />
          <SongItemRow titleName="Gaana Original" />
          <SongItemRow titleName="Star Gallery" />
          <Footer/>
        </div>
        <div className="rightPart">
          <img src={advertise} alt="" />
        </div>
      </div>

    </div>
  );
}

export default App;
