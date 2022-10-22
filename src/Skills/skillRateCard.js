import './skillRateCard.css';
const SkillRateCard = ({text,rate}) => {
    return (  
    <span className="skill-rate-card">
        <span className='skill-rate-head'>
            <span className="skill-name">{text}</span>
            <span className="skill-percent">{rate}</span>
        </span>
        <span className="skill-bar">
            <div className="fill" style={{
                width: rate
            }} >d</div>
        </span> 
    </span> 
    );
}
 
export default SkillRateCard;