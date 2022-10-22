import './skillCard.css';
import { useState } from 'react';
import SkillRate from "./skillRateCard";
const SkillCard = ({skill}) => {
    const [expanState,setState] = useState(false);
    return (  
        <span className='skill-main'>
        <span className="skill-card-back">
            <span className='skill-card-head'>
                <span className="icon material-icons">
                 {skill.icon}
                </span>
                <span className="skill-name">
                    {skill.name}
                </span>
                <span className={`material-icons icon skills-expand-icon ${expanState?'rotate180':''}`} onClick={() => setState(!expanState)}>
                    expand_more
                </span>
            </span> 
            
            <span className={`skills-list ${expanState?'show':'hidden'}`}>
                {skill.skillSet.map((skill) => (
                    <SkillRate text={skill.title} rate={skill.rate} key={skill.title}/>
                ))}
            </span>
        </span>
        </span>
     );
}
 
export default SkillCard;