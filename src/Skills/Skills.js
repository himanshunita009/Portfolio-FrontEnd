import './skills.css';
import SkillCard from "./skillCard";
import skills from './skillsList';
const Skills = () => {
    return (  
        <div className="skills-back" id='skills'>
            <span className='skills-header'>
                <span className='heading'>
                    Skills
                </span>
                <span className='skill-quotes'>
                    My Technical Level
                </span>
            </span>
            <div className='skills-set'>
            {skills && skills.map((skill) => (
                <SkillCard skill={skill}  key={skill.name}/>
            ))}
            </div>
        </div>
     );
} 
 
export default Skills;