import React from "react";
import style from "./Skills.module.scss"
import MySkill from "./MySkill/MySkill";
import Title from "../../common/components/title/Title";
import jsTsIm from "../../assets/images/tsjsImg.jpg";
import reactIm from "../../assets/images/ReactIcon.png";
import htmlcssIm from "../../assets/images/htmlcssImg.png";
import reduxIm from "../../assets/images/reduxImg.png";
import Fade from "react-reveal/Fade";


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
            skills: ["Functional components", "Class components", "HOC", "Promises", "Hooks", "REST API", "Storybook", "Libraries..."]
        },
        {
            title: "React",
            styleI: reactImage,
            skills: ["Functional components", "Class components", "Hooks", "Redux", "HOC", "Thunk",
                "REST API", "Tests", "Libraries..."]
        },
        {
            title: "Redux",
            styleI: reduxImage,
            skills: ["Redux in TypeScript", "Connect", "Redux-form", "Redux+LocaleStorage"]
        },
        {
            title: "HTML/CSS",
            styleI: htmlcssImage,
            skills: ["Adaptive layout", "Sass", "GH-pages"]
        }
    ]

    return (<Fade left>
            <div id="skills" className={style.skillsBlock}>
                <div className={style.skillsContainer}>
                    <Title title="My skills"> </Title>
                    <div className={style.skills}>
                        {mySkillsArr.map((sk) => (<MySkill
                            key={sk.title}
                            style={sk.styleI}
                            title={sk.title}
                            skills={sk.skills}
                        />))}
                    </div>
                </div>
            </div>
        </Fade>


    )
}
export default Skills