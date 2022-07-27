import React from "react";
import CircularSongItem from "./CircularSongItem";

// const img1 = require("./ImageForFeaturedArtists/1.jpeg");
// const img2 = require("./ImageForFeaturedArtists/2.jpeg");
// const img3 = require("./ImageForFeaturedArtists/3.jpeg");
// const img4 = require("./ImageForFeaturedArtists/4.jpeg");
// const img5 = require("./ImageForFeaturedArtists/5.jpeg");
// const img6 = require("./ImageForFeaturedArtists/6.jpeg");
 
const SongItemRow = (props) => {
    return(
        <div>
            <h3 className="trendingSongHeading"> {props.titleName}</h3>
            <div className="songListRow">
                <CircularSongItem className="songItem" songIcon={props.imageArray[0]} songName={props.songNameArray[0]} />
                <CircularSongItem className="songItem" songIcon={props.imageArray[1]} songName={props.songNameArray[1]} />
                <CircularSongItem className="songItem" songIcon={props.imageArray[2]} songName={props.songNameArray[2]} />
                <CircularSongItem className="songItem" songIcon={props.imageArray[3]} songName={props.songNameArray[3]} />
                <CircularSongItem className="songItem" songIcon={props.imageArray[4]} songName={props.songNameArray[4]} />
                <CircularSongItem className="songItem" songIcon={props.imageArray[5]} songName={props.songNameArray[5]} />
                
            </div>
          </div>
    )
};

export default SongItemRow;