import React from "react";
import "./OneSongItemStyle.css";


const OneSongItem = (props) => {
    let isPlay = false;
    const playSong = (isPlay) => {
        console.log("Clicked");
        let audio = new Audio('./Songs/kesariya.mp3');
        audio.play();
    }
    return(
        <div className="songItem">
            <div className="card myImageCard">
                <img src={props.songIcon} className="card-img-top myImage" alt="..." onClick={playSong(!isPlay)}/>            
                <div className="myCardBody">
                    <p className="myCardText">{props.songName}</p>
                </div>
            </div>
        </div>
    )
};

export default OneSongItem; 