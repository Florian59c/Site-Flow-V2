import './css/Profile.scss';
import Photo from 'assets/img/Photo.png';

function Profile() {
    return (
        <div className="Profile" id="profile" >
            <img src={Photo} alt="Florian Cagnon" />
            <div>
                <h2>Bonjour et bienvenue sur mon portfolio !</h2>
                <h2 className='myself'>Je suis Florian, développeur web fullstack à Lille.</h2>
                <p>Présentation ici !!!!</p>
            </div>
        </div>
    );
}

export default Profile;