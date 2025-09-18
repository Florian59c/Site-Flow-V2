import './css/Menu.scss';
import { Link } from "react-scroll";

function Menu({ className = "", onLinkClick = () => { } }) {
    return (
        <nav className={`Menu ${className}`.trim()}>
            <Link activeClass="active" to="profile" spy={true} smooth={true} offset={-60} duration={1000} onClick={onLinkClick}>
                <h4>Profil</h4>
            </Link>
            <Link activeClass="active" to="career" spy={true} smooth={true} offset={-70} duration={1000} onClick={onLinkClick}>
                <h4>Parcours</h4>
            </Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={1000} onClick={onLinkClick}>
                <h4>Compétences</h4>
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={1000} onClick={onLinkClick}>
                <h4>Projets</h4>
            </Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000} onClick={onLinkClick}>
                <h4>Contact</h4>
            </Link>
        </nav>
    );
}

export default Menu;