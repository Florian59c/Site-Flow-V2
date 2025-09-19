import './css/CV.scss';
import { useState } from 'react';
import X from "assets/img/icon/X.png";
import DownloadArrow from "assets/img/icon/Download-Arrow.png";
import CV_Classique_preview from "assets/img/cv/CV_(Classique)-Cagnon_Florian.png";
import CV_Original_preview from "assets/img/cv/CV_(Original)-Cagnon_Florian.png";

export default function CV({ setOpenModal }) {
    const [closing, setClosing] = useState(false);

    const handleOverlayClick = () => {
        // lance l'animation de fermeture
        setClosing(true);
        setTimeout(() => setOpenModal(false), 500);
    };

    return (
        <div
            className={`CVContainer ${closing ? "closing" : ""}`}
            data-aos="zoom-in"
            data-aos-duration="500"
            onClick={handleOverlayClick}
        >
            <div className='container' onClick={(e) => e.stopPropagation()}>
                <div className='x' onClick={handleOverlayClick}>
                    <img src={X} alt="Fermer la fenêtre" />
                </div>
                <div className='content'>
                    <div className="pdf-preview first-pdf">
                        <img src={CV_Classique_preview} alt="Apperçu CV classique" />
                        <a href="/cv/CV_(Classique)-Cagnon_Florian.pdf" download="CV_(Classique)-Cagnon_Florian.pdf">
                            <img src={DownloadArrow} alt="Télécharger" className='download-arrow' />
                            <p>Télécharger le CV "classique"</p>
                        </a>
                    </div>
                    <div className="pdf-preview">
                        <img src={CV_Original_preview} alt="Apperçu CV original" />
                        <a href="/cv/CV_(Original)-Cagnon_Florian.pdf" download="CV_(Original)-Cagnon_Florian.pdf">
                            <img src={DownloadArrow} alt="Télécharger" className='download-arrow' />
                            <p>Télécharger le CV "original"</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}