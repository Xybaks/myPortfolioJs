import React from "react";
import style from "./Main.module.scss"
import myImage from "../../assets/images/myPhoto.jpg"
import Particles from "react-particles-js";
import param from "./param"
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';


const Main = () => {
    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.backgroundAnimation} params={param}/>
            <Fade left cascade>
                <div className={style.container}>
                    <div className={style.mainText}>
                        <span>Hi There</span>
                        <h1>
                            <div className={style.im}>I am</div>
                            Nikolai Berestevich
                        </h1>
                        <Roll left>
                            <ReactTypingEffect
                                text={["Frontend Developer", "Looking for a job..."]}
                                eraseDelay={1000}
                            />
                        </Roll>
                    </div>
                    <div className={style.mainPhotoCont}>
                        <Tilt className="Tilt" options={{max: 20, scale: 1.1}}>
                            <img src={myImage} className={style.mainPhoto} alt={"myPhoto"}/>
                        </Tilt>
                    </div>

                </div>
            </Fade>
        </div>
    )
}


export default Main