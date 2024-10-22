import './css/Home.scss';
import Header from 'components/Header';
import Profile from 'components/Profile';
import Career from 'components/Career';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Profile />
            <Career />
        </div>
    );
}

export default Home;