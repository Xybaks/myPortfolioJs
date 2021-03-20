import React from "react";
import style from "./Navbar.module.scss"
import Scroll from 'react-scroll';

const Navbar = () => {
    const Link = Scroll.Link;
    const myNavbarArr = [
        {
            title: "To top",
            link: "main"
        },
        {
            title: "Skills",
            link: "skills"
        },
        {
            title: "Projects",
            link: "works"
        },
        {
            title: "Contacts",
            link: "contacts"
        },
        {
            title: "Resume",
            link: "https://drive.google.com/file/d/17HsXnY4FnZFJQ1sc9wZYNfYG7xXC25xc/view?usp=sharing"
        },
    ]


    return (
        <div className={style.navbar}>
            {myNavbarArr.map((el) =>
                el.title === "Resume"
                    ? <a className={style.link}
                         key={el.title}
                         href={el.link}
                         target="_blank"
                         rel="noreferrer"
                    >{el.title}</a>
                    : <Link className={style.link}
                            key={el.title}
                            to={el.link}
                            offset={-40}
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