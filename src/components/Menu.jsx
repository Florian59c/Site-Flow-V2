import './css/Menu.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Menu() {
    return (
        <div className='Menu'>
            <Link to="#profile"><h4>Profil</h4></Link>
            <Link to="#career"><h4>Parcour</h4></Link>
            <Link to="#skills"><h4>Compétences</h4></Link>
            <Link to="#projects"><h4>Projets</h4></Link>
            <Link to="#contact"><h4>Contact</h4></Link>
        </div>
    );
}

export default Menu;