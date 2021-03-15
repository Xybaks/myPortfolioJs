import React from "react";
import style from "./MyWork.module.scss";

const MyWork = (props) => {

    return (

            <a

                className={style.work}
                href={props.workLink}
                target="_blank"
                rel="noreferrer"
            >
                <div className={style.projectIcon} style={props.stile}>
                    <div className={style.link}><h2>click</h2></div>
                </div>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}> {props.description} </span>
            </a>
    )
}
export default MyWork