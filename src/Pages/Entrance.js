import * as React from "react";
import ".././Styles/GlobalStyles.css";
import Cube from ".././Images/Cube.png";

import { useNavigate } from "react-router-dom";

function Entrance() {
  const navigate = useNavigate();

  sessionStorage.removeItem("total");

  const handleStart = () => {
    navigate("/Pages/ResidentStatus");
  };

  return (
    <>
      <br />
      <div className="background2">
        <div className="container">
          <div className="cube3" onClick={handleStart}>
            <div className="face front3">
              <p className="cubeFont">Click to Enter</p>
            </div>
            <div className="face3 back3">
              <img className="pic" src={Cube} alt="P&R Logo" />
            </div>
            <div className="face top3">
              <img className="pic" src={Cube} alt="P&R Logo" />
            </div>
            <div className="face bottom3">
              <img className="pic" src={Cube} alt="P&R Logo" />
            </div>
            <div className="face left3">
              <img className="pic" src={Cube} alt="P&R Logo" />
            </div>
            <div className="face right3">
              <img className="pic" src={Cube} alt="P&R Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entrance;
