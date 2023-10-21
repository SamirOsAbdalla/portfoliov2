import React from 'react'
import "./Navbar.css"

import { useEffect, useRef, useState } from 'react'


interface Props {
    aboutRef: any,
    skillsRef: any,
    projectsRef: any,
}

type navScrollSection = "home" | "about" | "skills" | "projects"
export default function Navbar({ aboutRef, skillsRef, projectsRef }: Props) {
    const toggleNav = () => {
        if (mainNavActive == "active") {
            setMainNavActive("")
            setNavHeaderActive("")
        } else {

            setMainNavActive("active")
            setNavHeaderActive("active")

        }
    }

    const [mainNavActive, setMainNavActive] = useState<string>("")
    const [navHeaderActive, setNavHeaderActive] = useState<string>("")
    const [navHiddenClass, setNavHiddenClass] = useState<string>("shown")

    let lastScrollY = useRef(0)


    useEffect(() => {

        window.addEventListener('scroll', () => {

            let difference = window.scrollY - lastScrollY.current
            if (difference > 0) {
                setMainNavActive("")
                setNavHeaderActive("")
                setNavHiddenClass("nav__hidden")
            } else if (difference < 0) {
                setNavHiddenClass("shown")
            }

            lastScrollY.current = window.scrollY

        });
    }, [])

    const handleNavClick = (navScrollSection: navScrollSection) => {

        switch (navScrollSection) {
            case ("home"): {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                break;
            }
            case ("about"): {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }

            case ("skills"): {
                skillsRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }
            case ("projects"): {
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }
        }
    }


    //mostly repeated code (could maybe move switch into seperate function)
    //small function so maybe ok
    const handleDropdownClick = (navScrollSection: navScrollSection) => {
        const mainNav = document.querySelector(".main__nav")
        const navHeader = document.querySelector(".nav__header")

        switch (navScrollSection) {
            case ("home"): {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                break;
            }
            case ("about"): {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }

            case ("skills"): {
                skillsRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }
            case ("projects"): {
                projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                break;
            }
        }

        mainNav?.classList.toggle("active")

        navHeader?.classList.toggle("active")
    }
    return (
        <header className={`nav__header ${navHeaderActive == "active" ? "active" : ""} ${navHiddenClass == "nav__hidden" ? "nav__hidden" : ""}`}>
            <div className={`main__nav ${mainNavActive == "active" ? "active" : ""}`}>
                <div onClick={() => handleNavClick("home")} className="name__container"> &lt;<span className="name__span">Samir </span>/&gt;</div>
                <nav>
                    <ul>
                        <li onClick={() => handleNavClick("about")}>
                            <span className="nav__text">About</span>
                        </li>
                        <li onClick={() => handleNavClick("skills")}>
                            <span className="nav__text">Skills</span>
                        </li>
                        <li onClick={() => handleNavClick("projects")}>
                            <span className="nav__text">Projects</span>
                        </li>

                    </ul>
                    <div onClick={toggleNav} className="nav__toggle">
                        <div className="nav__burger"></div>
                    </div>
                </nav>
            </div>
            <section className="dropdown__menu">
                <ul>
                    <li onClick={() => handleDropdownClick("about")}>
                        <span className="nav__text">About</span>
                    </li>
                    <li onClick={() => handleDropdownClick("skills")}>
                        <span className="nav__text">Skills</span>
                    </li>
                    <li onClick={() => handleDropdownClick("projects")}>
                        <span className="nav__text">Projects</span>
                    </li>

                </ul>
            </section>
        </header>

    )
}
