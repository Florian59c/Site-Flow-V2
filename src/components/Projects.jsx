import './css/Projects.scss';
import ProjectsList from 'data/ProjectsList';

function Projects() {
    return (
        <div className="Projects">
            <h1>Mes projets</h1>
            <div className='projects-list'>
                {ProjectsList.map((project, index) => {
                    return (
                        <div key={index} className='one-project'>
                            <div>
                                <h2>{project.name}</h2>
                            </div>
                            <img src={project.imageLink} alt={project.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;