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
                    <div className='intro'>
                        <div>
                            <img src={selectedProject.imageLink} alt={`Screenshot du projet : ${selectedProject.name}`} />
                            <p>{selectedProject.technoList}</p>
                        </div>
                        <p>{selectedProject.presentation}</p>
                    </div>
                    <div className='details'>
                        <h2>Plus de détails</h2>
                        <p>{selectedProject.details}</p>
                    </div>
                    <div className='demo'>
                        <h3>Vidéos de Démonstration :</h3>
                        {selectedProject.video.map((video, index) => {
                            return (
                                <div key={index} >
                                    <video src={video.url}></video>
                                    <p>{video.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsDetail;