import './home.css'; 
import mypic from "../mypic.jpg";
import Typical from 'react-typical';
import ProfileLink from '../UI/profileLink/profile';
const Home = () => {

    return ( 
        <div className="home-back" id='home'> 
            <div className="zone-one">
                <div className="icons">
                    <ProfileLink isIcon={true} text="uil uil-linkedin" link="https://www.linkedin.com/in/himanshu-seth-a600ba231/"/>
                    <ProfileLink isIcon={true} text="uil uil-instagram" link="https://www.instagram.com/himanshu_flutes_/"/>
                    <ProfileLink isIcon={false} text="GFG" link="https://auth.geeksforgeeks.org/user/dividenconquer/profile"/>
                </div>
                             
                    <div className="photo">
                        <img src={mypic} alt="" srcset="" />
                    </div>
            </div>
               <div className='zone-two'>
                    <div className='intro'>
                        <span className='heading '> 
                            I'm Himanshu
                        </span>
                        
                        <span className='quotes'>
                        <Typical 
                                loop={Infinity}
                                wrapper="p"
                                steps={
                                    ['Student at NIT Agartala',2000,
                                    'A Front-End Developer',2000,
                                    'C / C++ Developer',2000,
                                    'React JS Developer',2000,
                                    'Interested In Coding',2000
                                ]}
                            />
                        </span>
                        </div>
                    <p className='text' style={{
                        textAlign: 'justify'
                    }}>I'm Himanshu Seth, pursuing M.C.A. from N.I.T. Agartala.I design Websites for small businesses, Currently working on M.E.R.N. Stack & also want to work on A.I. 
                    </p>
                    <span className='button-container'>
                    <span>
                        <a href='https://drive.google.com/file/d/113rFnofIbBSBRyqxwNqcNn7DHZaJX0KN/view?usp=sharing' rel="noreferrer" target="_blank" >C.V.</a>
                        <i className="material-icons">download</i>
                    </span>
                    <span>
                        <a href='#contact'>Contact Me</a>
                        <i className="material-icons">send</i>
                    </span> 
                    
                    </span> 
                </div>
        </div>
     );
}
 
export default Home;