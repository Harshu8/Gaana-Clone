import React from "react";
import "./CircularSongItemStyle.css";

const CircularSongItem = (props) => {
    return(
        <div className="songItem">
            <div className="card myImageCard">
                <img src={props.songIcon} className="card-img-top myCircularImage" alt="..."/>
                <div className="myCircularCardBody">
                    <p className="myCircularCardText">{props.songName}</p>
                </div>
            </div> 
        </div>
    )
};

export default CircularSongItem;