import React from "react";
import "./CircularSongItemStyle.css";

const CircularSongItem = (props) => {
    return(
        <div className="songItem">
            <div class="card myImageCard">
                <img src={props.songIcon} class="card-img-top myCircularImage" alt="..."/>
                <div class="myCircularCardBody">
                    <p class="myCircularCardText">{props.songName}</p>
                </div>
            </div>
        </div>
    )
};

export default CircularSongItem;