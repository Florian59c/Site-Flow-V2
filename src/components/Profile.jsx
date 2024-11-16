import './css/Profile.scss';
import Photo from 'assets/img/Photo.png';
import { TypeAnimation } from 'react-type-animation';

function Profile() {
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
                Passionné depuis l'enfance par les nouvelles technologies et le développement d'application, j'ai choisie de me spécialiser dans le développement d'applications web et mobile. De ce fait, je mets à disposition ma passion ainsi que mes compétences et mon expérience au service d'entreprises qui souhaitent s'investir dans le numérique.
            </p>
        </div>
    );
}

export default Profile;