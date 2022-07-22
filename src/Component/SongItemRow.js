import React from "react";
import OneSongItem from "./OneSongItem";

const img1 = require("./ImageForTrendingSection/1.jpeg");
const img2 = require("./ImageForTrendingSection/2.jpeg");
const img3 = require("./ImageForTrendingSection/3.jpeg");
const img4 = require("./ImageForTrendingSection/4.jpeg");
const img5 = require("./ImageForTrendingSection/5.jpeg");
const img6 = require("./ImageForTrendingSection/6.jpeg");

const SongItemRow = (props) => {
    return(
        <div>
            <h3 className="trendingSongHeading"> {props.titleName}</h3>
            <div className="songListRow">
                <OneSongItem className="songItem" songIcon={img1} songName="Kesariya" />
                <OneSongItem className="songItem" songIcon={img2} songName="Peaches" />
                <OneSongItem className="songItem" songIcon={img3} songName="Left And Right (Feat. Jung Kook of BTS)" />
                <OneSongItem className="songItem" songIcon={img4} songName="Dil" />
                <OneSongItem className="songItem" songIcon={img5} songName="SYL" />
                <OneSongItem className="songItem" songIcon={img6} songName="Hot Shit (feat. Kanye West & Lil Durk" />
                
            </div>
          </div>
    )
};

export default SongItemRow;