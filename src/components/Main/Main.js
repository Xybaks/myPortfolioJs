import React from "react";
import style from "./Main.module.scss"
import myImage from "../../assets/images/myPhoto.jpg"
const Main = () => {
    return (
        <div className={style.mainBlock}>
                <div className={style.mainText}>
                    <span>Hi There</span>
                    <h1><div className={style.im}>I am </div>
                        Nikolai Berestevich
                        </h1>
                    <p>Frontend Developer</p>
                </div>
                <div ><img src={myImage} className={style.mainPhoto} alt={"myPhoto"}/> </div>

        </div>
    )
}
export default Main