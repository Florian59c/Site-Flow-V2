import './css/Projects.scss';
import ProjectsList from 'data/ProjectsList';
import ProjectsDetail from 'modal/ProjectsDetail';
import { useState } from 'react';

function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    return (
        <div className="Projects" id="projects" >
            <h1>Mes projets</h1>
            <div className='projects-list'>
                {ProjectsList.map((project, index) => {
                    return (
                        <div key={index} className='one-project' onClick={() => { setSelectedProject(project); setOpenModal(true); }}>
                            <div>
                                <h3>{project.name}</h3>
                                <p>{project.technoList}</p>
                            </div>
                            <img src={project.imageLink} alt={project.name} />
                        </div>
                    );
                })}
            </div>
            {openModal && <ProjectsDetail selectedProject={selectedProject} setOpenModal={setOpenModal} />}
        </div>
    );
}

export default Projects;