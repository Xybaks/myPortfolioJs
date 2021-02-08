import React from "react";
import style from "./Work.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import MyWork from "./MyWork/MyWork";

const Work = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title} >Projects</h2>
                <div className={style.skills}>
                    <MyWork
                        title={"JS"}
                        description={" class and function components,inheritance of classes and interfaces,closure fsadfsadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadad"}
                    disc
                    />
                    <MyWork
                        title={"TypeScript"}
                        description={" class and function components,inheritance of classes and interfaces,closure "}
                        disc
                    />
                    <MyWork
                        title={"Redux"}
                        description={" class and function components,inheritance of classes and interfaces,closure "}
                        disc
                    />
                    <MyWork
                        title={"Redux"}
                        description={" class and function components,inheritance of classes and interfaces,closure "}
                        disc
                    />
                </div>
            </div>
        </div>
    )
}
export default Work