import React from 'react'
import "./ProjectItem.css"
import Image from 'next/image'
import clusterImage from "../../../public/cluster.png"
import pokestoreImage from "../../../public/pokeStore.png"
import dsImage from "../../../public/ds.png"

export interface IProjectItem {
    projectTitle: string,
    projectDescription: any,
    projectTechnologies: string[],
    liveLink: string,
    githubLink: string,
    videoLink: string
}

export default function ProjectItem({
    projectTitle, projectDescription,
    projectTechnologies, liveLink, githubLink,
    videoLink }: IProjectItem) {


    let imageLink: any;
    switch (projectTitle) {
        case ("Cluster"): {
            imageLink = clusterImage
            break;
        }
        case ("PokeStore"): {
            imageLink = pokestoreImage
            break;
        }
        case ("DS Visualizer"): {
            imageLink = dsImage
        }
    }
    return (
        <div className={`projectitem__wrapper`}>
            <a href={liveLink} target="_blank" className="projectitem__image__container">
                <Image style={{ width: '100%', height: 'auto' }} unoptimized={true} alt="Project Image" src={imageLink} />
            </a>
            <div className="projectitem__main">
                <h3 className="projectitem__title">{projectTitle}</h3>
                <div className="projectitem__description">
                    {projectDescription}
                </div>
                <div className="projectitem__technologies">
                    {projectTechnologies.map(projectTechnology => {
                        return (
                            <div key={projectTechnology} className="projectitem__technology">
                                {projectTechnology}
                            </div>
                        )
                    })
                    }
                </div>
                <div className="projectitem__links">
                    <a href={liveLink} target="_blank">
                        Live Site
                    </a>
                    <a href={githubLink} target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}
