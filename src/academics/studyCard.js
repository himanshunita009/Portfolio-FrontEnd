import './studyCard.css';
const StudyCard = ({details,showDetails}) => {
    return ( 
    <span className="study-card-back">
        <img src={details.logo} alt="Institute Logo"/>

        <span className="institute-name">{details.institute}</span>
        <span className="course-name">{details.course}</span>
        
        <span className="view-more-link" onClick={showDetails}>
            <span> View More</span> <i className="material-icons">arrow_forward</i>
        </span>
    
    </span> 
    );
    
}
 
export default StudyCard;