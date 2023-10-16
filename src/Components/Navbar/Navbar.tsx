import React from 'react'
import "./Navbar.css"

import { useEffect, useRef, useState } from 'react'
export default function Navbar() {
    const setNavbarActive = () => {
        const mainNav = document.querySelector(".main__nav")
        mainNav?.classList.toggle("active")

        const navHeader = document.querySelector(".nav__header")
        navHeader?.classList.toggle("active")
    }

    const [navHiddenClass, setNavHiddenClass] = useState<string>("shown")

    let lastScrollY = useRef(0)


    useEffect(() => {

        window.addEventListener('scroll', () => {

            let difference = window.scrollY - lastScrollY.current
            if (difference > 0) {
                setNavHiddenClass("nav__hidden")
            } else if (difference < 0) {

                setNavHiddenClass("shown")
            }

            lastScrollY.current = window.scrollY

        });
    }, [])

    return (
        <header className={`nav__header ${navHiddenClass == "nav__hidden" ? "nav__hidden" : ""}`}>
            <div className="main__nav">
                <div className="name__container"> &lt;<span className="name__span">Samir </span>/&gt;</div>
                <nav>
                    <ul>
                        <li>
                            <span className="nav__number">01.</span>
                            <span className="nav__text">About</span>
                        </li>
                        <li>
                            <span className="nav__number">02.</span>
                            <span className="nav__text">Skills</span>
                        </li>
                        <li>
                            <span className="nav__number">03.</span>
                            <span className="nav__text">Projects</span>
                        </li>

                    </ul>
                    <div onClick={setNavbarActive} className="nav__toggle">
                        <div className="nav__burger"></div>
                    </div>
                </nav>
            </div>
            <section className="dropdown__menu">
                <ul>
                    <li>
                        <span className="nav__number">01.</span>
                        <span className="nav__text">About</span>
                    </li>
                    <li>
                        <span className="nav__number">02.</span>
                        <span className="nav__text">Skills</span>
                    </li>
                    <li>
                        <span className="nav__number">03.</span>
                        <span className="nav__text">Projects</span>
                    </li>

                </ul>
            </section>
        </header>

    )
}
