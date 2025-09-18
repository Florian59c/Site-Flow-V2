import { useState } from 'react';
import MenuIcon from 'assets/img/icon/Menu.png';
import './css/Header.scss';
import Menu from './Menu';
import { Link } from "react-scroll";

function Header() {
    const [appearMenu, setAppearMenu] = useState(false);

    return (
        <div className="Header">
            <div className='bar'>
                <Link to="start" smooth={true} offset={-70} duration={1000}>
                    <h1>Mon portfolio</h1>
                </Link>

                {/* bouton burger visible en mobile */}
                <div className='mobile-screen' onClick={() => setAppearMenu(!appearMenu)}>
                    <img src={MenuIcon} alt="icon du menu" />
                    <h4>Menu</h4>
                </div>

                {/* menu visible par défaut en desktop */}
                <div className="desktop-menu">
                    <Menu />
                </div>
            </div>

            {/* menu mobile déroulant */}
            <div className="mobile-menu">
                <Menu className={appearMenu ? "show" : ""} />
            </div>
        </div>
    );
}

export default Header;