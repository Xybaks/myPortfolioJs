import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import MySkill from "./MySkill/MySkill";
import Title from "../../common/components/Title";
import jsTsIm from "../../assefds/images/tsjsImg.jpg";
import reactIm from "../../assefds/images/ReactIcon.png";
import htmlcssIm from "../../assefds/images/htmlcssImg.png";
import reduxIm from "../../assefds/images/reduxImg.png";


const Skills = () => {
    const jsTsImage = {
        backgroundImage: `url(${jsTsIm})`
    }
    const htmlcssImage = {
        backgroundImage: `url(${htmlcssIm})`
    }
    const reactImage = {
        backgroundImage: `url(${reactIm})`
    }
    const reduxImage = {
        backgroundImage: `url(${reduxIm})`
    }

    const mySkillsArr = [
        {
            title: "JavaScript/TypeScript",
            styleI: jsTsImage,
            skills: ["Functional components","Class components", "HOC", "Promises", "Hooks","REST API", "Storybook", "libraries..."]
        },
        {
            title: "React",
            styleI: reactImage,
            skills: ["Functional components","Class components", "Hooks", "Redux", "HOC", "Promises",
                "REST API", "Tests", "libraries..."]
        },
        {
            title: "Redux",
            styleI: reduxImage,
            skills: ["Hooks", "Redux in TypeScript", "Connect", "Redux+LocaleStorage"]
        },
        {
            title: "HTML/CSS",
            styleI: htmlcssImage,
            skills: ["Adaptive layout", "Sass", "GH-pages"]
        }
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="My skills"> </Title>
                <div className={style.skills}>
                    {mySkillsArr.map((sk) => (<MySkill
                        style={sk.styleI}
                        title={sk.title}
                        skills={sk.skills}
                    />))}
                </div>
            </div>
        </div>
    )
}
export default Skills