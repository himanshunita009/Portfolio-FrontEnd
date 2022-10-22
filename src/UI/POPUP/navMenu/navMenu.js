import { useState } from 'react';
import { useEffect } from 'react';
import MenuCard from './menuCard';
import './navMenu.css';
const NavMenu = ({handleNavMenu}) => {
    const [state,seState] = useState(false); 
    useEffect(() => {
        seState(true);
    },[]);
    return ( 
        <div className={`nav-menu-back fade ${state?"zindex":""}`} onClick={handleNavMenu}>
            <span className='card-container'>
                <MenuCard icon="home" name="home" link="#home" />
                <MenuCard icon="work" name="Projects" link="#projects" />
            </span>
            <span className='card-container'>
                <MenuCard icon="work" name="Skills" link="#skills" />
                <MenuCard icon="school" name="Academic" link="#academics" />
            </span>
            <MenuCard icon="call" name="Contact" link="#contact" />
        </div>
     );
}
 
export default NavMenu;