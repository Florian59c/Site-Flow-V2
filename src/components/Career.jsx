import './css/Career.scss';
import CareerList from 'data/CareerList';

function Career() {
    return (
        <div className="Career">
            <h1>Mon parcours dans le web</h1>
            <div className='career-list'>
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

export default Career;