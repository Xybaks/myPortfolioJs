import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../../common/styles/Container.module.css"

const Contacts = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title} >Contact me</h2>
                <form className={style.inputDiv}>
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.input} name="" id="" cols="30" rows="10"></textarea>
                </form>
                <h3 className={style.title} >Send</h3>
            </div>
        </div>
    )
}
export default Contacts