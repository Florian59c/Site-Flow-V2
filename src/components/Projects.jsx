import './css/Projects.scss';
import CareerList from 'data/CareerList';

function Projects() {
    return (
        <div className="Projects">
            <h1>Mes projets</h1>
            <div>
                {CareerList.map((career, index) => {
                    return (
                        <div key={index} className='one-career'>
                            <h1>{career.date}</h1>
                            <h2>{career.post}</h2>
                            <p>{career.place}</p>
                            <p>{career.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;