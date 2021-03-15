import React from "react";
import style from "./Work.module.scss"
import MyWork from "./MyWork/MyWork";
import Title from "../../common/components/title/Title";
import socialNetImg from "../../assets/images/socialNetwork.jpg";
import counterImg from "../../assets/images/counterImage.jpg";
import todolistImg from "../../assets/images/todolist.png";
import myPortfolioImg from "../../assets/images/N.png";
import Fade from "react-reveal/Fade";


const Work = () => {
    const portfolioImg = {
        backgroundImage: `url(${myPortfolioImg})`
    }

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
            title: "My portfolio(JS)",
            styleI: portfolioImg,
            description: ["my PortfolioPage SPA with JavaScript,SASS"],
            link:"https://github.com/Xybaks/myPortfolioJs"
        },
        {
            title: "Counter with Redux",
            styleI: counterImage,
            description: ["Crazy counter with Typescript, redux,localstorage and 4 different hooks"],
            link:"https://github.com/Xybaks/counter2"
        },
        {
            title: "Social Network",
            styleI: socialImage,
            description: ["SPA with Typescript, redux,thunk,REST API ... in progress"],
            link:"https://github.com/Xybaks/socialNetwork"
        },
        {
            title: "Powerful Todolist",
            styleI: todolistImage,
            description: ["SPA with Typescript, redux, API requests  with \"axios\" library,tests... in progress"],
            link:"https://github.com/Xybaks/todoList"
        }
    ]


    return (
        <Fade left>
            <div id="works" className={style.workBlock}>
                <div className={style.workContainer}>
                    <Title title="Projects"> </Title>
                    <div className={style.works}>
                        {myWorksArr.map((w) => <MyWork
                            key={w.title}
                            stile={w.styleI}
                            title={w.title}
                            description={w.description}
                            workLink={w.link}
                        />)}

                    </div>
                </div>
            </div>
        </Fade>
    )
}
export default Work