import React from "react";
import style from "./Work.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import MyWork from "./MyWork/MyWork";
import Title from "../../common/components/Title";
import socialNetImg from "../../assefds/images/socialNetwork.jpg";
import counterImg from "../../assefds/images/counterImage.jpg";
import todolistImg from "../../assefds/images/todolist.png";


const Work = () => {
    const socialImage = {
        backgroundImage: `url(${socialNetImg})`
    }
    const counterImage = {
        backgroundImage: `url(${counterImg})`
    }

    const todolistImage = {
        backgroundImage: `url(${todolistImg})`
    }

    const myWorksArr = [
        {
            title: "SocialNetwork",
            styleI: socialImage,
            description: ["SPA with Typescript, redux, API requests  with \"axios\" library... in process"]
        },
        {
            title: "Counter with Redux",
            styleI: counterImage,
            description: ["Crazy counter with Typescript, redux,localstorage and 4 different hooks"]
        },
        {
            title: "Powerful Todolist",
            styleI: todolistImage,
            description: ["SPA with Typescript, redux, API requests  with \"axios\" library,tests... in process"]
        }
    ]


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="Projects"> </Title>
                <div className={style.skills}>
                    {myWorksArr.map((w)=> <MyWork
                        stile={w.styleI}
                        title={w.title}
                        description={w.description}
                        disc
                    />)}

                </div>
            </div>
        </div>
    )
}
export default Work