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
import Image from 'next/image'

export default function Skills() {
    return (
        <section className="skills__wrapper">
            <h2 className="section__header skills__header">02. <span>Skills</span></h2>
            <p className="skills__text">
                My web technologies are part of what is commonly known as the MERN stack. In addition to this,
                I work with C++ for pet projects and for simply deepening my programming
                knowledge. I have highlighted below the technical skills that I will bring
                to your project.
            </p>
            <div className="skills__technologies">
                <div className="skills__card">
                    <div className="skills__image__container">
                        <div className="skills__image image__first">
                            <Image width={50} height={50} alt="css" src={cssLogo} />
                        </div>
                        <div className="skills__image">
                            <Image width={50} height={50} alt="css" src={htmlLogo} />
                        </div>
                        <div className="skills__image image__third">
                            <Image width={50} height={50} alt="css" src={typescriptLogo} />
                        </div>
                    </div>
                    <div className="skills__card__title">
                        Frontend Development
                    </div>
                    <p className="skills__paragraph">
                        My frontend development stack is comprised of good ol&apos; HTML, CSS,
                        and Typescript. I use Typescript instead of Javascript because I prefer
                        working with data that is explicitly typed which prevents a lot of headaches.
                        I take pride in building clean and functional websites
                        that provide users with a positive experience.
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
                        I have extensive experience with working with MongoDB seeing as it has
                        been the main database used in my projects. From simple CRUD operations to
                        more complicated queries, I can perform any type of data manipulation
                        needed for the project at hand.
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
                        My backend experience has come from working with NodeJS and ExpressJS.
                        Working with many different projects has allowed me to
                        interact with API&apos;s, set up routes, handle middleware and errors,
                        and much more.
                    </p>
                </div>
                <div className="skills__card ">
                    <div className="skills__image__container">
                        <div className="skills__image">
                            <Image width={50} height={50} alt="css" src={cppLogo} />
                        </div>
                        <div className="skills__image">
                            <Image width={50} height={50} alt="css" src={gitLogo} />
                        </div>
                    </div>
                    <div className="skills__card__title">
                        Misc.
                    </div>
                    <p className="skills__paragraph">
                        I am very familiar with C++ and enjoy using it to build video games with the SFML library.
                        C++ has also helped greatly in maintaining and reinforcing my computer science fundamentals.
                        Version control is also no stranger and I employ git in each one of my projects to ensure
                        that my work is not only saved but that there is a clear history and order to the work done
                        in each project.
                    </p>
                </div>
            </div>
        </section>
    )
}
