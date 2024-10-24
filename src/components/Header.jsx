import { useEffect, useState } from 'react';
import MenuIcon from 'assets/img/icon/Menu.png';
import './css/Header.scss';
import Menu from './Menu';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [appearMenu, setAppearMenu] = useState(false);

    useEffect(() => {

        if (window.innerWidth < 720) {
            setIsMobile(true);
        } else {
            setIsMobile(false)
        }
    }, [])

    return (
        <div className="Header">
            <div className='bar'>
                <h1 onClick={() => window.location.reload()}>Mon portfolio</h1>
                {isMobile ?
                    <div className='mobile-screen'>
                        <div onClick={() => setAppearMenu(!appearMenu)}>
                            <img src={MenuIcon} alt="icon du menu" />
                            <h2>Menu</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <Menu />
                    </div>
                }
            </div>
            {appearMenu && <Menu />}
        </div>
    );
}

export default Header;