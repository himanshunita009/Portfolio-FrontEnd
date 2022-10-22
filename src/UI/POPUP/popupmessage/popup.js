import './popup.css';
const PopUp = ({show,handleClose,data}) => {
    return ( 
        <span className={`details-back ${show?'show':'hidden'}`}>
        <span className="details">
            <span className="details-head">
                <span className="course-institute-name">{data.messageHead}</span>
                <span className="material-icons" onClick={() => handleClose(!show)}>cancel</span>
            </span>
            <span className="details-list">
                {data.message}
            </span>
        </span>
        </span>
     );
}
 
export default PopUp;