import React from 'react'
import "./Projects.css"
import { IProjectItem } from '../ProjectItem/ProjectItem'
import ProjectItem from '../ProjectItem/ProjectItem'
import { forwardRef } from 'react'
import { motion } from "framer-motion"

function Projects(props: any, ref: any) {
    const clusterModalText = <p>Cluster is a full-stack group and task-managing app. Users can
        create their own groups and invite others to join their group through a registered email. Once a
        user has elected to join a group they are now able to create and delineate tasks to their
        fellow group members. Each task has its own properties such as its task members status&apos;, comments, and its
        designated urgency.<br /><br />
        I wanted to create an app like this to build software that
        could actually be used in real life. For ephemeral groups such
        as a school project, this app is much more organized and easy to manage than
        say, writing in a Google doc.</p>
    const clusterObject: IProjectItem = {
        githubLink: "https://github.com/SamirOsAbdalla/cluster",
        liveLink: "https://www.clustersapp.net/",
        projectTitle: "Cluster",
        projectDescription: clusterModalText,
        projectTechnologies: ["Typescript", "React", "NextJS", "MongoDB"],
        videoLink: "https://www.youtube.com/embed/vrqepVF1AvU"
    }

    const pokestoreText = <p>PokeStore is an e-commerce website where users can buy pokemon from the provided catalog.
        In addition, if one does not wish to purchase a beloved pokemon at the moment, they can register an account
        and add a pokemon to their favorites to buy them later. <br /><br />

        The motivation for this project was both a burning, innate need to build an e-commerce site as a web developer, as well
        as my love for Pokemon that I have had since I was a kid. Instead of simply building a pokedex or an e-commerce site,
        I thought it may be fun to combine the two and give a unique spin on what are typically common projects. In addition,
        I wanted to practice working with state that spanned across the entire app (the cart in this case), as well as making
        API calls with a Node and Express backend.</p>
    const pokestoreObject: IProjectItem = {
        githubLink: "https://github.com/SamirOsAbdalla/pokeStore",
        liveLink: "https://pokestore.herokuapp.com/",
        projectTitle: "PokeStore",
        projectDescription: pokestoreText,
        videoLink: "https://www.youtube.com/embed/WDLzI5RL7Yw",
        projectTechnologies: ["Typescript", "React", "NodeJS", "Express", "Redux", "MongoDB"],
    }


    return (
        <section ref={ref} className="projects__wrapper">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.1 }}
                className="projects__motion"
            >
                <h2 className="section__header projects__header"><span>Projects</span></h2>
                <div className="projects__list">
                    <ProjectItem {...clusterObject} />
                    <ProjectItem {...pokestoreObject} />
                </div>
            </motion.div>
        </section>
    )
}

export default forwardRef(Projects)
