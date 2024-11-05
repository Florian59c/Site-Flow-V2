import './css/Contact.scss';
import Mail from 'assets/img/icon/Mail.png';
import Phone from 'assets/img/icon/Phone.png';
import LinkedIn from 'assets/img/icon/LinkedIn.png';

function Contact() {
    return (
        <div className="Contact" id="contact" >
            <h1>Me contacter</h1>
            <div className='contact-message'>
                <p>Vous souhaitez me contacter ?</p>
                <p>Je serais ravi d'échanger avec vous par mail, téléphone ou sur LinkedIn selon vos préférences.</p>
                <p>Je suis joignable tous les jours entre 10h et 18h.</p>
            </div>
            <div className='my-contact'>
                <div className='link'>
                    <a href="mailto:florian.cagnon@live.fr">
                        <div>
                            <img src={Mail} alt="Mail" />
                        </div>
                        <p>florian.cagnon@live.fr</p>
                    </a>
                </div>
                <div className='link'>
                    <a href="tel:+33695857136">
                        <div>
                            <img src={Phone} alt="Téléphone" />
                        </div>
                        <p>06.95.85.71.36</p>
                    </a>
                </div>
                <div className='link'>
                    <a href="https://www.linkedin.com/in/florian-cagnon-dev-web-fullstack/" target="_blank" rel="noreferrer noopener">
                        <div>
                            <img src={LinkedIn} alt="LinkedIn" />
                        </div>
                        <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;