import "./navbar.css";
import  Link  from "../UI/link/link";
import NavMenu from "../UI/POPUP/navMenu/navMenu";
const Navbar = ({menuState,handleMenuClick}) => {
    return (  
        <div className="nav-back">
            <span className="name-logo-container heading">
                Secret Coder 
            </span> 
            <span className="link-container">
                <Link text="Home" link="#home"/>
                <Link text="Projects" link="#projects"/>
                <Link text="Skills" link="#skills"/>
                <Link text="Academics" link="#academics"/>
                <Link text="Contact" link="#contact" />
            </span> 
            {!menuState && <span className="material-icons menu" onClick={() => handleMenuClick()} >menu</span>}
            {menuState && <span className="material-icons menu" onClick={() => handleMenuClick()} >close</span>}
            {menuState && <NavMenu handleNavMenu={() => handleMenuClick()}/>}
        </div>
     );
}
 
export default Navbar;