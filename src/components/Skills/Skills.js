import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import MySkill from "./MySkill/MySkill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title} >My skills</h2>
                <div className={style.skills}>
                    <MySkill
                        title={"JS"}
                        description={" class and function components,inheritance of classes and interfaces,closure fsadfsadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad"}
                    disc
                    />
                    <MySkill
                        title={"TypeScript"}
                        description={" class and function components,inheritance of classes and interfaces,closure "}
                        disc
                    />
                    <MySkill
                        title={"Redux"}
                        description={" class and function components,inheritance of classes and interfaces,closure "}
                        disc
                    />
                </div>
            </div>
        </div>
    )
}
export default Skills