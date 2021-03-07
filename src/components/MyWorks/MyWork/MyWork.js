import React from "react";
import style from "./MyWork.module.css";

const MyWork = (props) => {

    return (
        <div className={style.skill}>
            <div className={style.projectIcon} style={props.stile}>
                <a className={style.link} href=""><h2>click</h2></a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}> {props.description} </span>
        </div>
    )
}
export default MyWork