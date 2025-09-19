import './css/Profile.scss';
import Photo from 'assets/img/Photo.png';
import CVIcon from 'assets/img/icon/CV-Icon.png';
import CV from 'modal/CV';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Profile() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="Profile" id="profile" >
            <div className='hello'>
                <img
                    src={Photo}
                    alt="Florian Cagnon"
                    data-aos="flip-left"
                    data-aos-duration="2000"
                />
                <div>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', fontSize: '1.8rem', fontWeight: 'bold', textShadow: '2px 2px 3px #808080' }}
                        sequence={[
                            `Bonjour et bienvenue sur mon portfolio !
                        
                        Je suis Florian, développeur web fullstack à Lille.`,
                            1,
                        ]}
                        wrapper="span"
                        cursor={false}
                        speed={50}
                    />
                </div>
            </div>
            <p data-aos="fade-up" data-aos-duration="2000">
                Développeur fullstack spécialisé en React/Next, NestJS et PostgreSQL, j’accompagne mes clients de la conception au déploiement d’applications web performantes et évolutives.
            </p>
            <div className="cv-block" data-aos="fade-up" data-aos-duration="2000" onClick={() => setOpenModal(true)}>
                <img src={CVIcon} alt="Icon de CV" />
                <p>Voir mes CV</p>
            </div>
            {openModal && <CV setOpenModal={setOpenModal} />}
        </div>
    );
}