import './css/Skills.scss';
import SkillsList from 'data/SkillsList';
import { Tooltip } from '@material-ui/core';

function Skills() {
    return (
        <div className="Skills" id="skills" >
            <h1>Mes compétences</h1>
            <div className='skills-list'>
                {SkillsList.map((skill, index) => {
                    return (
                        <Tooltip title={skill.name} aria-label={skill.name} arrow>
                            <img src={skill.link} alt={skill.name} key={index} />
                        </Tooltip>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;