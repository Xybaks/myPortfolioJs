import React from "react";
import style from "./Footer.module.scss"
import Title from "../../common/components/title/Title";
import emailImg from "../../assets/images/email.png"
import lindedinImg from "../../assets/images/linkedin.png"
import githubImg from "../../assets/images/gitHub.png"

const Footer = () => {

    let myNavbarArr = [
        {
            title: "email",
            imgLogo: emailImg,
            action() {
            }
        },
        {
            title: "lindedin",
            imgLogo: lindedinImg,
            action() {
            }
        },
        {
            title: "github",
            imgLogo: githubImg,
            action() {
            }
        },
    ]


    return (
        <div className={style.footerBlock}>
            <div className={style.footer}>
                <Title title={"Nikolai Berestevich"}> </Title>
                <div className={style.imageContainer}>
                    {myNavbarArr.map((el) =>
                        <h3 className={style.link} style={
                            {backgroundImage: `url(${el.imgLogo})`}
                        }>
                        </h3>
                    )}

                </div>
                <h5>
                    © 2021 All rights reserved
                </h5>
            </div>
        </div>
    )
}
export default Footer