import './css/Contact.scss';
import Menu from 'assets/img/icon/Menu.png'

function Contact() {
    return (
        <div className="Contact">
            <h1>Me contacter</h1>
            <div className='my-contact'>
                <div>
                    <a href="mailto:florian.cagnon@live.fr">
                        <img src={Menu} alt="Mail" />
                        <p>florian.cagnon@live.fr</p>
                    </a>
                </div>
                <div>
                    <a href="tel:+33695857136">
                        <img src={Menu} alt="Téléphone" />
                        <p>06.95.85.71.36</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/florian-cagnon-dev-web-fullstack/" target="_blank" rel="noreferrer noopener">
                        <img src={Menu} alt="LinkedIn" />
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;