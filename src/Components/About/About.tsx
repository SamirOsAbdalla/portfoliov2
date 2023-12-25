import React from 'react'
import "./About.css"
import { forwardRef } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import headshot from "../../../public/headshot.jpg"
function About(props: any, ref: any) {
    return (

        <section ref={ref} className="about__wrapper">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.1 }}
                className="about__container"
            >
                <h2 className="section__header about__header"><span>About</span></h2>
                <div className="about__main">
                    <div className="about__text">
                        <p> I am a developer with a bachelor&apos;s in Mathematics of Computation from
                            UCLA. Seeing as how I like the &quot;computation&quot; side much more than the &quot;mathematics&quot;, I have found a great joy
                            in creating software and showing off a completed product. <br /><br />My specialty is
                            with the <span>React</span> and <span>Typescript</span> ecosystem, but I am
                            constantly learning new technologies to try and stay up-to-date with the ever-changing industry standards.
                            Currently, I am looking for work and hoping to grow and develop my skills with a company.
                            When I am not working on anything, I enjoy playing basketball with friends, gaming, and
                            watching funny videos from my favorite software engineering youtubers.
                        </p>
                        <div className="about__text__bold">Listed below are the main technologies I use</div>
                        <ul className="about__list">
                            <li><span>React</span></li>
                            <li><span>Typescript</span></li>
                            <li><span>MongoDB</span></li>
                            <li><span>NodeJS/Express</span></li>
                        </ul>
                    </div>
                    <div className="headshot__container">
                        <Image style={{ width: '100%', height: 'auto' }} alt="Headshot" src={headshot} />
                    </div>
                </div>

            </motion.div >
        </section>


    )
}

export default forwardRef(About)
