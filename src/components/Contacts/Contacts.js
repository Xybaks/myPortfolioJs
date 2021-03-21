import React from "react";
import style from "./Contacts.module.scss";
import Title from "../../common/components/title/Title";
import Fade from "react-reveal/Fade";
import emailjs from 'emailjs-com';
import "./Contacts.scss";
import {useState} from "react";


const Contacts = () => {
// локальный стэейт управления полями ввода для их зануления после отправки письма
    const [formData, SetFormData] = useState({formName: "", formEmail: "", formText: ""})

// коллбэки изменения стэйта полей ввода имени, емэила, текста
    const onChangeName = (e) => {
        // console.log(e.currentTarget?.value)
        SetFormData({...formData, formName: e.currentTarget.value})
    }

    const onChangeEmail = (e) => {
        // console.log(e.currentTarget?.value)
        SetFormData({...formData, formEmail: e.currentTarget.value})
    }

    const onChangeText = (e) => {
        // console.log(e.currentTarget?.value)
        SetFormData({...formData, formText: e.currentTarget.value})
    }

// функция отправки формы с помощью сторонней библиотеки
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_9h3pcnu', 'template_6r8xfxl', e.target, 'user_pdLCIcbtWMFPHqEnvLBR9')
            .then(() => {
                    // кусок кода для зануления формы через нетрадиционный подход. не повторять!
                    // Array.from(e.nativeEvent.target.children).forEach(item => {
                    //         if (item.dataset.element === "cleanForm") {
                    //             item.value = "";
                    //         }
                    //     }
                    // );
                    SetFormData({formName: "", formEmail: "", formText: ""})
                }
                , (error) => {
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
                        <input
                            name="user_name"
                            type="text"
                            id="input1"
                            data-element="cleanForm"
                            placeholder="Name"
                            required
                            value={formData.formName}
                            onChange={onChangeName}
                        />
                        <input
                            type="email"
                            name="user_email"
                            id="input2"
                            data-element="cleanForm"
                            placeholder="Email"
                            required
                            value={formData.formEmail}
                            onChange={onChangeEmail}
                        />
                        <textarea
                            name="message"
                            id="textarea1"
                            cols="30" rows="7"
                            data-element="cleanForm"
                            placeholder="Your message"
                            value={formData.formText}
                            onChange={onChangeText}
                            required/>
                        <input type="submit" value="Send"
                        />
                    </form>
                </div>
            </div>
        </Fade>
    )
}
export default Contacts