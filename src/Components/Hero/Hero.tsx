import React from 'react'
import "./Hero.css"
import cloudSvg from "../../../public/cloud.svg"

import Image from 'next/image'
import gitIcon from "../../../public/github-icon.svg"
import linkedINIcon from "../../../public/linked-logo.svg"
import { motion } from "framer-motion"

interface Props {
    projectsRef: any;
}
export default function Hero({ projectsRef }: Props) {

    const handleViewClick = () => {
        projectsRef?.current.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div className="hero__wrapper">
            <section>
                <div>
                    <div style={{ top: "70vh", }} className="cloud__wrapper moveAnimationOne">
                        <div style={{ width: "70px", height: "70px" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "90vh", left: "30vw" }} className="cloud__wrapper .moveAnimationFive">
                        <div style={{ width: "50px", height: "50px", opacity: "0.5" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "50vh", left: "0em" }} className="cloud__wrapper moveAnimationTwo">
                        <div style={{ width: "80px", height: "80px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "15vh", left: "20vw" }} className="cloud__wrapper .moveAnimationFive ">
                        <div style={{ width: "30px", height: "30px", opacity: "0.7" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "35vh", left: "40vw" }} className="cloud__wrapper moveAnimationThree">
                        <div style={{ width: "75px", height: "75px", opacity: "0.2" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "10vh", left: "35vw" }} className="cloud__wrapper moveAnimationOne">
                        <div style={{ width: "75px", height: "75px", opacity: "0.7" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "0vh", left: "6vw" }} className="cloud__wrapper moveAnimationTwo">
                        <div style={{ width: "75px", height: "75px", opacity: "0.3" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "40vh", left: "60vw" }} className="cloud__wrapper .moveAnimationFour">
                        <div style={{ width: "90px", height: "90px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "57vh", left: "90vw" }} className="cloud__wrapper moveAnimationTwo">
                        <div style={{ width: "90px", height: "90px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "80vh", left: "80vw" }} className="cloud__wrapper moveAnimationTwo">
                        <div style={{ width: "45px", height: "45px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "20vh", left: "70vw" }} className="cloud__wrapper moveAnimationOne">
                        <div style={{ width: "60px", height: "60px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "35vh", left: "62vw" }} className="cloud__wrapper moveAnimationThree">
                        <div style={{ width: "47px", height: "47px", opacity: "0.8" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "40vh", left: "30vw" }} className="cloud__wrapper .moveAnimationFour">
                        <div style={{ width: "50px", height: "50px", opacity: "0.4" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "50vh", left: "6vw" }} className="cloud__wrapper moveAnimationOne">
                        <div style={{ width: "35px", height: "35px", opacity: "0.6" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "27vh", left: "-6vw" }} className="cloud__wrapper .moveAnimationFour">
                        <div style={{ width: "50px", height: "50px", opacity: "0.3" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "47vh", left: "-5vw" }} className="cloud__wrapper moveAnimationThree">
                        <div style={{ width: "30px", height: "30px", opacity: "0.9" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "67vh", left: "-6vw" }} className="cloud__wrapper .moveAnimationFive ">
                        <div style={{ width: "70px", height: "70px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "17vh", left: "-5vw" }} className="cloud__wrapper moveAnimationOne">
                        <div style={{ width: "52px", height: "52px", opacity: "0.4" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "10vh", left: "70vw" }} className="cloud__wrapper moveAnimationFour">
                        <div style={{ width: "38px", height: "38px", opacity: "0.7" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <div style={{ top: "37vh", left: "80vw" }} className="cloud__wrapper moveAnimationFive">
                        <div style={{ width: "30px", height: "30px", opacity: "1" }} className="cloud">
                            <Image fill alt="Cloud" src={cloudSvg} />
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="hero__text">
                            <div className="hero__greeting">Hi, my name is</div>
                            <div className="hero__personalname">Samir Abdalla</div>
                            <div className="hero__tag">I build web applications</div>

                            <p className="hero__blurb">
                                I am a Full-Stack Developer who loves working with all kinds
                                of software. I carefully break down problems in order to turn
                                great ideas into an even better reality.
                            </p>
                            <div className="icon__logos">
                                <div onClick={handleViewClick} className="hero__button">
                                    View Work
                                </div>
                                <a href="https://samirosabdalla.github.io/my-resume/Resume.pdf" target="_blank" className="hero__button">
                                    Resume
                                </a>

                            </div>
                        </div>

                    </motion.div>

                </div>
            </section>
        </div>
    )
}
