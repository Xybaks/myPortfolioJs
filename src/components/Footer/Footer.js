import React from "react";
import style from "./Footer.module.scss"
import Title from "../../common/components/title/Title";
import emailImg from "../../assets/images/email.png"
import lindedinImg from "../../assets/images/linkedin.png"
import githubImg from "../../assets/images/gitHub.png"

const myNavbarArr = [
    {
        title: "email",
        imgLogo: emailImg,
        link: "mailto:nikolai.berestevich@gmail.com"
    },
    {
        title: "lindedin",
        imgLogo: lindedinImg,
        link: "https://linkedin.com/in/nikolai-berestevich"
    },
    {
        title: "github",
        imgLogo: githubImg,
        link: "https://github.com/Xybaks"
    },
]


const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <Title id={"contacts"} title={"Nikolai Berestevich"}> </Title>
                <div className={style.imageContainer}>
                    {myNavbarArr.map((el,index) =>
                        <a className={style.link}
                           key={index}
                           style={{backgroundImage: `url(${el.imgLogo})`}}
                           href={el.link}
                           target="_blank"
                           rel="noreferrer"
                        >
                        </a>
                    )}
                </div>
                <h5 className={style.copyright}>
                    © 2021 All rights reserved
                </h5>
            </div>
        </div>
    )
}
export default Footer