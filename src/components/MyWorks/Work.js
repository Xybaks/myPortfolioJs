import React from "react";
import style from "./Work.module.scss"
import MyWork from "./MyWork/MyWork";
import Title from "../../common/components/Title";
import socialNetImg from "../../assets/images/socialNetwork.jpg";
import counterImg from "../../assets/images/counterImage.jpg";
import todolistImg from "../../assets/images/todolist.png";


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
        <div className={style.workBlock}>
            <div className={style.workContainer}>
                <Title title="Projects"> </Title>
                <div className={style.works}>
                    {myWorksArr.map((w)=> <MyWork
                        stile={w.styleI}
                        title={w.title}
                        description={w.description}
                    />)}

                </div>
            </div>
        </div>
    )
}
export default Work