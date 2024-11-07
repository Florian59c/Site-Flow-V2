import './css/Profile.scss';
import Photo from 'assets/img/Photo.png';
import { TypeAnimation } from 'react-type-animation';

function Profile() {
    return (
        <div className="Profile" id="profile" >
            <div className='hello'>
                <img src={Photo} alt="Florian Cagnon" />
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
            <p>Présentation ici !!!!</p>
        </div>
    );
}

export default Profile;