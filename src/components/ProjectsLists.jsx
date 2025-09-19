import './css/ProjectsLists.scss';
import ProjectsDetail from 'modal/ProjectsDetail';
import { useState } from 'react';

export default function ProjectsLists({ projects }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    return (
        <>
            <div className='projects-list'>
                {projects.map((project, index) => {
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
        </>
    );
}