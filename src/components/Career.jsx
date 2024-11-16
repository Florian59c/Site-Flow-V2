import './css/Career.scss';
import CareerList from 'data/CareerList';

function Career() {
    return (
        <div className="Career" id="career" >
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Mon parcours dans le web</h1>
            <div className='career-list'>
                {CareerList.map((career, index) => {
                    return (
                        <div key={index} className='one-career' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <h3>{career.date}</h3>
                            <h2>{career.post}</h2>
                            <p className='place'>{career.place}</p>
                            <p>{career.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Career;