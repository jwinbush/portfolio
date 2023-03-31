import React from "react";
import "./preloader.css";
import emerald from "../../assets/images/EmeraldLogo.png";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      
      <img
        className="absolute animate-pulse top-[40%] lg:left-[47%] left-[50%] w-[50px] lg:w-[100px]"
        src={emerald}
        alt=""
      />
    </div>
  );
}

export default Preloader;
