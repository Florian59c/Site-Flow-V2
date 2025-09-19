import './css/Skills.scss';
import SkillsList from 'data/SkillsList';
import SkillSection from './SkillSection';

export default function Skills() {
    const mainSkills = SkillsList.filter(skill => skill.isMainSkill);
    const otherSkills = SkillsList.filter(skill => !skill.isMainSkill);

    return (
        <div className="Skills" id="skills">
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                Mes compétences
            </h1>
            <SkillSection title="Stack principal" skills={mainSkills} />
            <SkillSection
                title="Autres technos explorées"
                skills={otherSkills}
                toggleable
            />
        </div>
    );
}