import React from "react";
import "./preloader.css";
function Preloader(props) {
    return <div id = { props.load ? "preloader" : "preloader-none" } > </div>;
}

export default Preloader; 