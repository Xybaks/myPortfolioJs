import React from "react";
import style from "./Navbar.module.scss"

const Navbar = () => {

    const myNavbarArr = [
        {
            title: "Go to top",
            link:""
        },
        {
            title: "Skills",
            link:""
        },
        {
            title: "Projects",
            link:""
        },
        {
            title: "Contacts",
            link:""
        },
        {
            title: "Resume",
            link:""
        },
    ]


    return (
        <div className={style.navbar}>
            {myNavbarArr.map((el)=>
            <a  href={el.link}>{el.title}</a>)}
        </div>
    )
}
export default Navbar