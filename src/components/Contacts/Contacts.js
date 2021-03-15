import React from "react";
import style from "./Contacts.module.scss";
import Title from "../../common/components/title/Title";
import Fade from "react-reveal/Fade";
import emailjs from 'emailjs-com';
import "./Contacts.scss";

const Contacts = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_9h3pcnu', 'template_6r8xfxl', e.target, 'user_pdLCIcbtWMFPHqEnvLBR9')
            .then(() => {
                Array.from(e.nativeEvent.target.children).forEach(item => {
                        if (item.dataset.element === "cleanForm") {
                            item.value = "";
                        }
                    }
                );
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Fade left>
            <div id="contacts" className={style.mainBlock}>
                <div className={style.contactsContainer}>
                    <Title title={"Contact me"}/>
                    <form className="contact-form"
                          onSubmit={sendEmail}>
                        <input name="user_name"
                               type="text"
                               id="input1"
                               data-element="cleanForm"
                               placeholder="Name"
                               required
                        />
                        <input
                            type="email"
                            name="user_email"
                            id="input2"
                            data-element="cleanForm"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            name="message"
                            id="textarea1"
                            cols="30" rows="7"
                            data-element="cleanForm"
                            placeholder="Your message"
                            required/>
                        <input type="submit" value="Send"
                        />
                        {/*<Button title={"Send"}/>*/}
                    </form>
                </div>
            </div>
        </Fade>
    )
}
export default Contacts