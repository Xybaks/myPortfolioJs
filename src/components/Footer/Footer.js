import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../../common/styles/Container.module.css";
import Title from "../../common/components/Title";


const Footer = () => {
    return (

        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footer}`}>
                <Title title={"Nikolai Berestevich"}> </Title>
                <div className={style.imageContainer}>
                    <h3 className={style.link}>
                    </h3>
                    <h3 className={style.link}>
                    </h3>
                    <h3 className={style.link}>
                    </h3>
                    <h3 className={style.link}>
                    </h3>
                </div>
                <h5>
                    © 2021 All rights reserved
                </h5>
            </div>
        </div>
    )
}
export default Footer