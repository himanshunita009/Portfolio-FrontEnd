import './academics.css';
import StudyCard from "./studyCard";
import AcademicDetails from '../UI/POPUP/academicDetails';
import { useState } from 'react';
import academicDetails from './academicDetails';
const Academics = () => {
    const [show,setShow] = useState(false);
    const [data,setData] = useState(null);
    const handleShow = (key) => {
        setData(key);
        setShow(true); 
    };
    return (   
        <div className="academic-main" id="academics">
            <span className="academic-head">
                Academic Records
            </span>
            <div className='academic-card-back'>
            {academicDetails && academicDetails.map((details) => (
                <StudyCard key={details.course} details={details} showDetails={() =>handleShow(details)} />
            ))}
            </div>
            {data && <AcademicDetails data={data} show={show} handleClose={(res) => setShow(res)}/>}
        </div>
    ); 
}
 
export default Academics;