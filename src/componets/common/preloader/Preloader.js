import style from "./Preloader.module.css";
import preloader from "../../assets/images/LoadingUsers.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div className={style.loading}>
            <img className={style.imgPreloader} src={preloader}/>
        </div>
    )
};

export default Preloader;