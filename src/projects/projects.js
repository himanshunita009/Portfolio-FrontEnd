import './projects.css';
import ProjectCard from './projectCard';
import proDetails  from "./projectsDetails";
import { useState } from 'react';
const Projects = ({menuState}) => {
    const [index,setIndex] = useState(0);
    const handleMove = (step) => {
        let temp =index+step;
        if(temp>proDetails.length-1)
            temp =0;
        else if (temp < 0)
            temp = proDetails.length-1;
        setIndex(temp);
    }
    return ( 
        <div className={`project-main ${menuState?"goback":""}`} id='projects'>
            <span className="project-heading">
                <span className='heading'>My Projects</span>
                <span className='pro-quote'>My tech works</span>
            </span>
                {index === 0 && <ProjectCard move={handleMove} data={proDetails[0]} moveProject={(step) => handleMove(step)} />}
                {index === 1 && <ProjectCard move={handleMove} data={proDetails[1]} moveProject={(step) => handleMove(step)}  />}
                {index === 2 && <ProjectCard move={handleMove} data={proDetails[2]} moveProject={(step) => handleMove(step)}  />}
                {index === 3 && <ProjectCard move={handleMove} data={proDetails[3]} moveProject={(step) => handleMove(step)}  />}
        </div>
     );
}
 
export default Projects;