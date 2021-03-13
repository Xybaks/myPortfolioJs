import React from "react";
import style from "./Contacts.module.scss"
import Title from "../../common/components/title/Title";
import Button from "../../common/components/button/Button";
import Fade from "react-reveal/Fade";

const Contacts = () => {
    return (
        <Fade bottom>
            <div id="contacts" className={style.mainBlock}>
                <div className={style.contactsContainer}>
                    <Title title={"Contact me"}> </Title>
                    <form className={style.inputDiv}>
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <textarea className={style.input} name="" id="" cols="30" rows="10"> </textarea>
                    </form>
                    <Button title={"Send"}/>
                </div>
            </div>
        </Fade>
    )
}
export default Contacts