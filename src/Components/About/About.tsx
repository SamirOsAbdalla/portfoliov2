import React from 'react'
import "./About.css"

export default function About() {
    return (
        <section className="about__wrapper">
            <div className="about__text">
                <h2 className="section__header about__header">01. <span>About</span></h2>
                <p> I am a developer with a bachelor&apos;s in Mathematics of Computation from
                    UCLA. Seeing as how I like the &quot;computation&quot; side much more than the &quot;mathematics&quot;, I have found a great joy
                    in creating software and showing off a completed product. <br /><br />My specialty is
                    with the <span>React</span> and <span>Typescript</span> ecosystem, but I am
                    constantly learning new technologies to try and stay up-to-date with the ever-changing industry standards.
                    Currently, I am looking for work and hoping to grow and develop my skills with a company.
                    When I am not working on anything, I enjoy playing basketball with friends, gaming, and thinking
                    about that one bug that popped up in my last coding session (it happens every single time).
                </p>
                <div className="about__text__bold">Listed below are the main technologies I use</div>
                <ul className="about__list">
                    <li><span>React</span></li>
                    <li><span>Typescript</span></li>
                    <li><span>MongoDB</span></li>
                    <li><span>NodeJS/Express</span></li>
                </ul>
            </div>
        </section>
    )
}
