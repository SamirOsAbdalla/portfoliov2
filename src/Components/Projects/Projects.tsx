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

    const dsText = <p>I created the Data Structure Visualizer in order to provide helpful visuals to some
        of my tutees who were learning data structures for the first time. Certain data stuctures, such as the linked list,
        contain animations that make it clear as to what it means to &quot;reverse a linked list&quot; or
        what it means to &quot;hash&quot; something.<br /><br />

        My main struggle with this project was figuring out how to animate some of the operations as well
        as to make those animations clear to someone who was not familiar with the data structures at play.
        All in all, I really enjoyed this project since I not only created something that could help someone else
        but I too become even more familiar with some of the fundamental data structures.
    </p>
    const dsObject: IProjectItem = {
        githubLink: "https://github.com/SamirOsAbdalla/ds-visualizer",
        liveLink: "https://ds-visualizer-jade.vercel.app/",
        projectTitle: "DS Visualizer",
        projectDescription: dsText,
        projectTechnologies: ["Typescript", "NextJS"],
        videoLink: "https://www.youtube.com/embed/GpHBxOpsK3I"
    }

    const speedeatsText = <p>SpeedEats is a full-stack web application designed to remove
        any indecision about where to eat. By clicking on the big blue button on the main page,
        users who have opted in to allowing their location to be shared will receive a restaurant
        based off of their location and current filters. Once a restaurant has been found,
        users can also favorite any restaurant they choose, so long as they have an account
        registered with the app.<br /><br />

        SpeedEats wraps multiple APIs, specifically the Yelp and TripAdvisor API, in order to
        provide users with multiple different sources for places to eat, as well as to prevent
        too much load on any one API. I loved building this app, because I not only use it on a weekly
        basis, but my friends, family and many other people I don&apos;t know also frequently use it,
        which makes me keep wanting to build software that can be enjoyed by myriad different people.
    </p>
    const speedeatsObject: IProjectItem = {
        githubLink: "https://github.com/SamirOsAbdalla/speed-eats",
        liveLink: "https://www.speedeats.co/",
        projectTitle: "SpeedEats",
        projectDescription: speedeatsText,
        projectTechnologies: ["Typescript", "React", "NextJS", "MongoDB", "Bootstrap"],
        videoLink: ""
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
                    <ProjectItem {...speedeatsObject} />
                    <ProjectItem {...clusterObject} />
                    <ProjectItem {...pokestoreObject} />
                    <ProjectItem {...dsObject} />
                </div>
            </motion.div>
        </section>
    )
}

export default forwardRef(Projects)
