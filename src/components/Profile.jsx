import './css/Profile.scss';
import Photo from 'assets/img/Photo.png';

function Profile() {
    return (
        <div className="Profile">
            <img src={Photo} alt="Florian Cagnon" />
            <div>
                <h1>Bonjour et bienvenue sur mon portfolio !</h1>
                <h2>Je suis Florian, développeur web fullstack à Lille.</h2>
                <p>Présentation ici !!!!</p>
            </div>
        </div>
    );
}

export default Profile;