"use client"
import React from 'react'
import "./Footer.css"
import { HiOutlineMail } from "react-icons/hi"
import gitIcon from "../../../public/github-icon.svg"
import linkedINIcon from "../../../public/linked-logo.svg"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer__wrapper">
            <div className="footer__top">
                <a className="footer__link" href="mailto:samirosabdalla@gmail.com">
                    <HiOutlineMail />
                    Contact

                </a>
                <div className="icon__containers">
                    <div className="icon__container github__icon">
                        <a href="https://github.com/SamirOsAbdalla" target="_blank" className="icon__link">
                            <Image fill alt="git" src={gitIcon} />
                        </a>
                    </div>
                    <div className="icon__container linkedin__icon">
                        <a href="https://www.linkedin.com/in/samir-abdalla-402510232" target="_blank" className="icon__link">
                            <Image fill alt="linkedin" src={linkedINIcon} />
                        </a>
                    </div>
                </div>
            </div>

            <p> Copyright &copy;. Samir Abdalla</p>
        </footer>
    )
}
