import React from "react";
import OneSongItem from "./OneSongItem";

// const img1 = require("./ImageForTrendingSection/1.jpeg");
// const img2 = require("./ImageForTrendingSection/2.jpeg");
// const img3 = require("./ImageForTrendingSection/3.jpeg");
// const img4 = require("./ImageForTrendingSection/4.jpeg");
// const img5 = require("./ImageForTrendingSection/5.jpeg");
// const img6 = require("./ImageForTrendingSection/6.jpeg");

const SongItemRow = (props) => {
    return(
        <div>
            <h3 className="trendingSongHeading"> {props.titleName} </h3>
            <div className="songListRow">
                <OneSongItem className="songItem" songIcon={props.imageArray[0]} songName={props.songNameArray[0]}/>
                <OneSongItem className="songItem" songIcon={props.imageArray[1]} songName={props.songNameArray[1]} />
                <OneSongItem className="songItem" songIcon={props.imageArray[2]} songName={props.songNameArray[2]} />
                <OneSongItem className="songItem" songIcon={props.imageArray[3]} songName={props.songNameArray[3]} />
                <OneSongItem className="songItem" songIcon={props.imageArray[4]} songName={props.songNameArray[4]} />
                <OneSongItem className="songItem" songIcon={props.imageArray[5]} songName={props.songNameArray[5]} />
                
            </div>
          </div>
    )
};

export default SongItemRow;