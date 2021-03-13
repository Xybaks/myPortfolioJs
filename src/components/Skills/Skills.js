import React from "react";
import style from "./Skills.module.scss"
import MySkill from "./MySkill/MySkill";
import Title from "../../common/components/title/Title";
import jsTsIm from "../../assets/images/tsjsImg.jpg";
import reactIm from "../../assets/images/ReactIcon.png";
import htmlcssIm from "../../assets/images/htmlcssImg.png";
import reduxIm from "../../assets/images/reduxImg.png";


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
            title: "TypeScript/JavaScript",
            styleI: jsTsImage,
            skills: ["Functional components","Class components", "HOC", "Promises", "Hooks","REST API", "Storybook", "libraries..."]
        },
        {
            title: "React",
            styleI: reactImage,
            skills: ["Functional components","Class components", "Hooks", "Redux", "HOC", "thunk",
                "REST API", "Tests", "libraries..."]
        },
        {
            title: "Redux",
            styleI: reduxImage,
            skills: [ "Redux in TypeScript", "Connect","redux-form", "Redux+LocaleStorage"]
        },
        {
            title: "HTML/CSS",
            styleI: htmlcssImage,
            skills: ["Adaptive layout", "Sass", "GH-pages"]
        }
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
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