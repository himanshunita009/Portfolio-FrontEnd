import './menuCard.css';
const MenuCard = ({icon,name,link}) => {
    return ( 
        <span className="menu-card-back">
            <span className="material-icons">{icon}</span>
            <a href={link} >{name}</a>
        </span>
     );

}
export default MenuCard;