import './css/NotFound.scss';
import { Link } from 'react-router-dom';
import Button from "assets/img/Button.png";

function NotFound() {
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h2>La page que vous cherchez n'existe pas !</h2>
            <Link to="/" className='button'>
                <img src={Button} alt='bouton personnalisé' />
                <h3>Retourner à la page d'accueil</h3>
            </Link>
        </div>
    );
}

export default NotFound;