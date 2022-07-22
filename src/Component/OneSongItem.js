import React from "react";
import "./OneSongItemStyle.css";

const OneSongItem = (props) => {
    return(
        <div className="songItem">
            <div class="card myImageCard">
                <img src={props.songIcon} class="card-img-top myImage" alt="..."/>
                <div class="myCardBody">
                    <p class="myCardText">{props.songName}</p>
                </div>
            </div>
        </div>
    )
};

export default OneSongItem;