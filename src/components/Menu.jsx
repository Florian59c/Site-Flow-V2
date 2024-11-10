import './css/Menu.scss';
import { Link } from "react-scroll";

function Menu() {
    return (
        <div className='Menu'>
            <Link
                activeClass="active"
                to="profile"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
            >
                <h4>Profil</h4>
            </Link>
            <Link
                activeClass="active"
                to="career"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <h4>Parcours</h4>
            </Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <h4>Compétences</h4>
            </Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <h4>Projets</h4>
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                <h4>Contact</h4>
            </Link>
        </div>
    );
}

export default Menu;