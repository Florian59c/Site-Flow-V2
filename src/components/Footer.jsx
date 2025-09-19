import './css/Footer.scss';
import AN from 'assets/img/icon/Drapeau-Anglais.png';
import JP from 'assets/img/icon/Drapeau-Japonais.png';

export default function Footer() {
    return (
        <div className="Footer">
            <a href="https://github.com/Florian59c?tab=repositories" target="_blank" rel="noreferrer noopener"><p className='github'>GitHub</p></a>
            <p className='copyright'>Copyright ©2024 by Cagnon Florian</p>
            <div className='images'>
                <a href="https://translate.google.fr/?hl=fr&sl=fr&tl=en&text=Vous%20pensiez%20que%20%C3%A7a%20changerait%20la%20langue%20%3F!%20Dommage...&op=translate" target="_blank" rel="noreferrer noopener">
                    <img src={AN} alt="drapeau anglais pour changer la langue en anglais" />
                </a>
                <a href="https://translate.google.fr/?hl=fr&sl=fr&tl=ja&text=Vous%20pensiez%20que%20%C3%A7a%20changerait%20la%20langue%20%3F!%20Dommage...&op=translate" target="_blank" rel="noreferrer noopener">
                    <img src={JP} alt="drapeau japonais pour changer la langue en japonais" />
                </a>
            </div>
        </div>
    );
}