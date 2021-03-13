import React from "react";
import style from "./Navbar.module.scss"
import Scroll from 'react-scroll';

const Navbar = () => {
    const Link = Scroll.Link;
    const myNavbarArr = [
        {
            title: "Go to top",
            link:"main"
        },
        {
            title: "Skills",
            link:"skills"
        },
        {
            title: "Projects",
            link:"works"
        },
        {
            title: "Contacts",
            link:"contacts"
        },
        {
            title: "Resume",
            link:"d"
        },
    ]


    return (
        <div className={style.navbar}>
            {myNavbarArr.map((el)=>
            <Link className={style.link}
                activeClass={style.active}
                to={el.link}
                offset={-50}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={700}
                delay={200}
                isDynamic={true}
                ignoreCancelEvents={false}
            >
                {el.title}
                </Link>
                )}
        </div>
    )
}
export default Navbar