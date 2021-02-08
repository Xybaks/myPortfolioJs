import React from "react";
import style from "./Header.module.css"
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    )
}
export default Header