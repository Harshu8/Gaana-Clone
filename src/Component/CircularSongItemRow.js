import React from "react";
import CircularSongItem from "./CircularSongItem";

const img1 = require("./ImageForFeaturedArtists/1.jpeg");
const img2 = require("./ImageForFeaturedArtists/2.jpeg");
const img3 = require("./ImageForFeaturedArtists/3.jpeg");
const img4 = require("./ImageForFeaturedArtists/4.jpeg");
const img5 = require("./ImageForFeaturedArtists/5.jpeg");
const img6 = require("./ImageForFeaturedArtists/6.jpeg");

const SongItemRow = (props) => {
    return(
        <div>
            <h3 className="trendingSongHeading"> {props.titleName}</h3>
            <div className="songListRow">
                <CircularSongItem className="songItem" songIcon={img1} songName="Arijit Singh" />
                <CircularSongItem className="songItem" songIcon={img2} songName="Pritam" />
                <CircularSongItem className="songItem" songIcon={img3} songName="Tanishk Bagchi" />
                <CircularSongItem className="songItem" songIcon={img4} songName="Neha Kakkar" />
                <CircularSongItem className="songItem" songIcon={img5} songName="Badshah" />
                <CircularSongItem className="songItem" songIcon={img6} songName="Yo Yo Honey Singh" />
                
            </div>
          </div>
    )
};

export default SongItemRow;