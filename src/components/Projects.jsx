import './css/Projects.scss';
import ProjectsList from 'data/ProjectsList';
import ProjectsDetail from 'modal/ProjectsDetail';
import { useState } from 'react';

function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    return (
        <div className="Projects" id="projects" >
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Mes projets</h1>
            <p className='intro' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Tous mes projets sont triés du plus récent au plus ancien.</p>
            <div className='projects-list'>
                {ProjectsList.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className='one-project'
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            onClick={() => { setSelectedProject(project); setOpenModal(true); }}
                        >
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