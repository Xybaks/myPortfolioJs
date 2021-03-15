import React from "react";
import style from "./MySkill.module.scss"


const MySkill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}> </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                {
                    props.skills.map((someSkill,index) =>
                        <li
                            key={index}
                            className={style.li}
                        > {someSkill} </li>)}
            </div>
        </div>
    )
}
export default MySkill