import './css/ProjectsDetail.scss';
import X from "assets/img/icon/X.png";

function ProjectsDetail({ selectedProject, setOpenModal }) {
    return (
        <div className="ProjectsDetail" >
            <div className='container'>
                <div className='x' onClick={() => setOpenModal(false)}>
                    <img src={X} alt="Fermer la fenêtre" />
                </div>
                <div className='content'>
                    <h1>{selectedProject.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default ProjectsDetail;