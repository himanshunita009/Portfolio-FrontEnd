import './projectCard.css';

const ProjectCard = ({data,moveProject}) => {
    return (    
        <span className="pro-card-main fade">
            <img src={data.imgSrc} alt="Logo"  />
            <span className="pro-desc-back">
                <span className="pro-name">
                {data.name}</span>
            
                <span className="pro-details">{data.details}</span>
                
                <span className='button-container'><a href={data.link} rel="noreferrer" target="_blank">Demo</a><i className='material-icons'>arrow_forward</i></span>
            </span>
            <i className='material-icons left' onClick={() => moveProject(-1)}>navigate_before</i>
            <i className='material-icons right' onClick={() => moveProject(1)}>navigate_next</i>
        </span>
    );
}
 
export default ProjectCard;