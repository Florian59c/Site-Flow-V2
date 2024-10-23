import './css/Home.scss';
import Header from 'components/Header';
import Profile from 'components/Profile';
import Career from 'components/Career';
import Skills from 'components/Skills';
import Projects from 'components/Projects';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Profile />
            <Career />
            <Skills />
            <Projects />
        </div>
    );
}

export default Home;