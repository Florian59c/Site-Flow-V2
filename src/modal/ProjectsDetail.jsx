import './css/ProjectsDetail.scss';
import { useState } from 'react';
import X from "assets/img/icon/X.png";
import Button from "assets/img/Button.png";

function ProjectsDetail({ selectedProject, setOpenModal }) {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setOpenModal(false), 500);
    };

    return (
        <div
            className={`ProjectsDetail ${closing ? "closing" : ""}`}
            data-aos="zoom-in"
            data-aos-duration="500"
            onClick={handleClose}
        >
            <div className='container' onClick={(e) => e.stopPropagation()}>
                <div className='x' onClick={handleClose}>
                    <img src={X} alt="Fermer la fenêtre" />
                </div>
                <div className='content'>
                    <h1>{selectedProject.name}</h1>
                    <div className='intro'>
                        <div>
                            <img src={selectedProject.imageLink} alt={`Screenshot du projet : ${selectedProject.name}`} />
                            <p>{selectedProject.technoList}</p>
                        </div>
                        <p className='present'>{selectedProject.presentation}</p>
                    </div>
                    {selectedProject.details && (
                        <div className='details'>
                            <h2>Plus de détails</h2>
                            <p>{selectedProject.details}</p>
                        </div>
                    )}
                    {selectedProject.video.length !== 0 && (
                        <div className='demo'>
                            <h3>Vidéos de Démonstration :</h3>
                            <div className='video-container'>
                                {selectedProject.video.map((video, index) => (
                                    <div key={index}>
                                        <video src={video.url} type="video/mp4" controls></video>
                                        <p>{video.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedProject.links.length !== 0 && (
                        <div className='links'>
                            <h2>Liens</h2>
                            <div className='buttons-container'>
                                {selectedProject.links.map((link, index) => (
                                    <a href={link.url} target="_blank" rel="noreferrer noopener" key={index} className='link'>
                                        <img src={Button} alt='bouton personnalisé' />
                                        <h2>{link.name}</h2>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectsDetail;