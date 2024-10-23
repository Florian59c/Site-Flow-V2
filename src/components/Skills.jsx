import './css/Skills.scss';
import SkillsList from 'data/SkillsList';

function Skills() {
    return (
        <div className="Skills">
            <h1>Mes compétences</h1>
            <div className='skills-list'>
                {SkillsList.map((skill, index) => {
                    return (
                        <img src={skill.link} alt={skill.name} key={index} />
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;