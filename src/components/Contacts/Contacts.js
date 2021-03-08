import React from "react";
import style from "./Contacts.module.scss"
import Title from "../../common/components/Title";

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
                <h3>Send</h3>
            </div>
        </div>
    )
}
export default Contacts