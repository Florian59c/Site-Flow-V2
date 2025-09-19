import { useState } from "react";
import { Tooltip } from "@mui/material";
import Arrow from "assets/img/icon/right-arrow.png";

export default function SkillSection({ title, skills, toggleable = false }) {
    const [open, setOpen] = useState(!toggleable);

    return (
        <div className="skill-section">
            <div
                className={`sub-category ${toggleable ? "other-skills-select" : ""}`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                onClick={toggleable ? () => setOpen(!open) : undefined}
            >
                <p>{title}</p>
                {toggleable && (
                    <img
                        src={Arrow}
                        alt="flèche"
                        className={`arrow ${open ? "open" : ""}`}
                    />
                )}
            </div>
            {open && (
                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <Tooltip
                            key={index}
                            title={skill.name}
                            aria-label={skill.name}
                            arrow
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-delay="200"
                        >
                            <img src={skill.link} alt={skill.name} />
                        </Tooltip>
                    ))}
                </div>
            )}
        </div>
    );
}