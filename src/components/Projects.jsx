import './css/Projects.scss';
import ProjectsLists from './ProjectsLists';
import ProjectsList from 'data/ProjectsList';
import Arrow from "assets/img/icon/right-arrow.png";
import { useState } from 'react';

export default function Projects() {
    const [display, setDisplay] = useState(false);
    return (
        <div className="Projects" id="projects" >
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Mes projets</h1>
            <div className='sub-category'>
                <p>Projets Principaux</p>
            </div>
            <ProjectsLists projects={ProjectsList.slice(0, 2)} />
            <div className='sub-category' onClick={() => setDisplay(!display)}>
                <p>Anciens Projets</p>
                <img
                    src={Arrow}
                    alt="Flèche"
                    className={`arrow ${display ? 'rotate' : ''}`}
                />
            </div>
            {display && <ProjectsLists projects={ProjectsList.slice(2)} />}
        </div>
    );
}