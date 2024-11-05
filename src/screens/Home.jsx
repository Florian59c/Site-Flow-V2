import './css/Home.scss';
import Header from 'components/Header';
import Profile from 'components/Profile';
import Career from 'components/Career';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

function Home() {
    return (
        <div className="Home" id='start'>
            <Header />
            <Profile />
            <Career />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;