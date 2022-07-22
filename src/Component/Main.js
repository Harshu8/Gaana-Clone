import React from "react";
import "./MainStyle.css";
import { Link } from "react-router-dom";

 
const Main = () => {
  return (
    <div className="myfirstLine">
      <nav>
        <ul>
          <li><Link className="mymainLink" to="/">All</Link></li>
          <li><Link className="mymainLink" to="/">Trending Songs</Link></li>
          <li><Link className="mymainLink" to="/">New Songs</Link></li>
          <li><Link className="mymainLink" to="/">Old Songs</Link></li>
          <li><Link className="mymainLink" to="/">Mods & Genres A</Link></li>

          {/* <li>
            <div className="dropdown">
                <button onMouseOver=`${myfunction()}` className="dropdownButton">Moods & Genres A</button>
                <div id="myDropdown" className="dropdownContent">
                    <Link to="/">Album</Link>
                    <Link to="/">Album</Link>
                    <Link to="/">Album</Link>
                </div>
            </div>

                <div className="dropdown">
                <button className="mydropdownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Moods & Genres</button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
                </div>


            <button className="mydropdownButton">Moods & Genres A</button>
          </li> */}

          <li><Link className="mymainLink" to="/">Album</Link></li>
          <li><Link className="mymainLink" to="/">Radio</Link></li>
          <li><Link className="mymainLink" to="/">Podcast</Link></li>
          <li><Link className="mymainLink" to="/">My Music</Link></li>
        </ul>
      </nav>
    </div>
  );
};


// function myfunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onmouseenter = function( event) {
//     if (!event.target.matches('.dropdownButton')) {
//         var dropdowns = document.getElementsByClassName("dropdownContent");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//           var openDropdown = dropdowns[i];
//           if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//             }
//         }
//     }
// }



export default Main;
