import React from "react";
import style from "./Contacts.module.scss"
import Title from "../../common/components/title/Title";
import Button from "../../common/components/button/Button";

const Contacts = () => {
    return (
        <div className={style.mainBlock}>
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
    )
}
export default Contacts