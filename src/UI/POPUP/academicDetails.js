import './academicsDetails.css'
const AcademicDetails = ({show,handleClose,data}) => {
    return ( 
        <span className={`details-back ${show?'show':'hidden'}`}>
        <span className="details">
            <span className="details-head">
                <span className="course-institute-name">{data.course} - {data.institute}</span>
                <span className="material-icons" onClick={() => handleClose(!show)}>cancel</span>
            </span>
            <span className="details-list">
              {data.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </span>
        </span>
        </span>
     );
}
 
export default AcademicDetails;