import './css/Skills.scss';
import SkillsList from 'data/SkillsList';
import { Tooltip } from '@material-ui/core';

function Skills() {
    return (
        <div className="Skills" id="skills" >
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Mes compétences</h1>
            <div className='skills-list'>
                {SkillsList.map((skill, index) => {
                    return (
                        <Tooltip
                            title={skill.name}
                            aria-label={skill.name}
                            arrow
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-delay="500"
                        >
                            <img src={skill.link} alt={skill.name} />
                        </Tooltip>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;