import React from "react";
import "./styles/Main.css";
import banner from "../assets/banner.jpg";

function Main() {
  return (
    <div>
      <div className="main">
        <header>heelo</header>
        {/* banner  */}
        <div className="banner">
          <div className="banner-text">
            <h4 className="banner-heading">Covid-19 Update</h4>
            <p className="banner-notice">
              The official gilled database for coronavirus (covid 19)
            </p>
          </div>
          <div className="banner-imgs">
            <img src={banner} alt="" className="banner-img" />
          </div>
        </div>
        {/* banner end  */}

        {/* map  */}

        <div>
          <div className="map">map</div>
        </div>
        <div className="last-section">
          <div className="graph">graph</div>
          <div className="graph">cards</div>

        </div>

      </div>
    </div>
  );
}

export default Main;
