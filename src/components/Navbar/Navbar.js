import React from "react";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a className={style.link} href="">Go to top</a>
            <a className={style.link} href="">Skills</a>
            <a className={style.link} href="">Projects</a>
            <a className={style.link} href="">Contacts</a>
        </div>
    )
}
export default Navbar