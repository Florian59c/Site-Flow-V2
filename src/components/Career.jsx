import './css/Career.scss';
import careerList from 'data/CareerList'

function Career() {
    return (
        <div className="Career">
            <h1>Mon parcours dans le web</h1>
            <div className='career-list'>
                {careerList.map((career) => {
                    return (
                        <div className='one-career'>
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