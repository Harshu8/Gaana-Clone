import React from 'react';
import "./imageCarouselStyle.css";

const img1 = require("./imageForCarousel/1.jpeg");
const img2 = require("./imageForCarousel/2.jpeg");
const img3 = require("./imageForCarousel/3.jpeg");
const img4 = require("./imageForCarousel/4.jpeg");
const img5 = require("./imageForCarousel/5.jpeg");
const img6 = require("./imageForCarousel/6.jpeg");
const img7 = require("./imageForCarousel/7.jpeg");
const img8 = require("./imageForCarousel/8.jpeg");

const ImageCarousel = () => {
    return(
        <div id="carouselExampleControls" className="setMyCarousel carousel slide" data-bs-ride="carousel">
            <div className="myCarouselInner carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img5} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img6} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img7} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={img8} className="d-block w-100" alt="..."/>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
};


export default ImageCarousel;