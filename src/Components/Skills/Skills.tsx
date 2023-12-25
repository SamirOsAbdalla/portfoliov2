import React from 'react'
import "./Skills.css"
import cssLogo from "../../../public/css.svg"
import htmlLogo from "../../../public/html.svg"
import typescriptLogo from "../../../public/typescript.svg"
import mongoDBLogo from "../../../public/mongodb.svg"
import nodeJSLogo from "../../../public/nodejs.svg"
import expressLogo from "../../../public/expressjs.svg"
import cppLogo from "../../../public/c.svg"
import gitLogo from "../../../public/git.svg"
import nextJSLogo from "../../../public/nextjs.svg"
import reactLogo from "../../../public/react.svg"
import { motion } from "framer-motion"

import { forwardRef } from 'react'
import Image from 'next/image'

const skillsArray = ["HTML", "CSS", "JavaScript", "Typescript", "React", "NextJS", "NodeJS"
    , "ExpressJS", "MongoDB", "Redux", "Git", "Bootstrap"]
function Skills(props: any, ref: any) {
    return (

        <section ref={ref} className="skills__wrapper">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.1 }}
                className="skill__motion"
            >
                <h2 className="section__header skills__header"><span>Skills</span></h2>
                <p className="skills__text">
                    My web technologies are part of what is commonly known as the MERN stack. I have highlighted below the technical skills that I will bring
                    to your project. At the bottom is a TLDR of what I use for web development.
                </p>
                <div className="skills__technologies__wrapper">
                    <div className="skills__technologies">
                        <div className="skills__card">
                            <div className="skills__image__container">
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={nextJSLogo} />
                                </div>
                            </div>
                            <div className="skills__card__title">
                                Full-Stack Development
                            </div>
                            <p className="skills__paragraph">
                                My experience in web development spans both the frontend and the backend.
                                I use <span className="skills__bold">NextJS</span> for not only the ease of use when it comes to handling API
                                routes, but for its many optimizations and quality of life changes
                                with images, SSR, etc.
                            </p>
                        </div>
                        <div className="skills__card">
                            <div className="skills__image__container">
                                <div className="skills__image image__first">
                                    <Image width={50} height={50} alt="css" src={cssLogo} />
                                </div>
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={htmlLogo} />
                                </div>
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={typescriptLogo} />
                                </div>
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={reactLogo} />
                                </div>
                            </div>
                            <div className="skills__card__title">
                                Frontend Development
                            </div>
                            <p className="skills__paragraph">
                                My frontend development stack is comprised of good ol&apos; <span className="skills__bold">HTML</span>, <span className="skills__bold">CSS</span>, <span className="skills__bold">Typescript</span>, and <span className="skills__bold">React</span>. I use Typescript instead of Javascript because I prefer
                                working with data that is explicitly typed which prevents a lot of headaches.
                                I take pride in building clean and functional websites
                                that provide users with a positive experience.
                            </p>
                        </div>
                        <div className="skills__card ">
                            <div className="skills__image__container skills__image__nodeexpress">
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={nodeJSLogo} />
                                </div>
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={expressLogo} />
                                </div>
                            </div>
                            <div className="skills__card__title">
                                Backend Development
                            </div>
                            <p className="skills__paragraph">
                                My backend experience has come from working with <span className="skills__bold">NodeJS</span> and <span className="skills__bold">ExpressJS</span>.
                                Working with many different projects has allowed me to
                                interact with API&apos;s, set up routes, handle middleware and errors,
                                and much more.
                            </p>
                        </div>
                        <div className="skills__card">
                            <div className="skills__image__container">
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={mongoDBLogo} />
                                </div>

                            </div>
                            <div className="skills__card__title">
                                Database Development
                            </div>
                            <p className="skills__paragraph">
                                I have extensive experience with working with <span className="skills__bold">MongoDB</span> seeing as it has
                                been the main database used in my projects. From simple CRUD operations to
                                more complicated queries, I can perform any type of data manipulation
                                needed for the project at hand.
                            </p>
                        </div>

                        <div className="skills__card ">
                            <div className="skills__image__container">
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="css" src={cppLogo} />
                                </div>
                                <div className="skills__image">
                                    <Image width={50} height={50} alt="git" src={gitLogo} />
                                </div>
                            </div>
                            <div className="skills__card__title">
                                Misc.
                            </div>
                            <p className="skills__paragraph">
                                I am very familiar with <span className="skills__bold">C++</span> and enjoy using it to build a variety of pet projects.
                                C++ has also helped greatly in maintaining and reinforcing my computer science fundamentals especially
                                when it comes to OOP. Version control is also no stranger and I employ <span className="skills__bold">git</span> in each one of my projects
                                to preserve a clear history of my work.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="skills__summary">
                    {skillsArray.map(skill => {
                        return (
                            <div key={skill} className="projectitem__technology">
                                {skill}
                            </div>
                        )
                    })}
                </div>
            </motion.div>

        </section>

    )
}

export default forwardRef(Skills)
