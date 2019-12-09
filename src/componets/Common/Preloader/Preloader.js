import style from "./Preloader.module.css";
import preloader from "../../Assets/Images/LoadingUsers.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div className={style.loading}>
            <img src={preloader}/>
        </div>
    )
};

export default Preloader;