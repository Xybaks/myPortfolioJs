import React from "react";
import style from "./MySkill.module.css"


const MySkill = (props) => {
    debugger
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}> </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                {
                    props.skills.map((deskr) =>
                        <li className={style.li}> {deskr} </li>)}
            </div>
        </div>
    )
}
export default MySkill