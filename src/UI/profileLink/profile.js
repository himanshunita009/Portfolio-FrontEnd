import "./profile.css";
const ProfileLink = ({isIcon,text,link}) => {
    return ( 
        <a href={link} className="profile-link" rel="noreferrer" target="_blank"> 
            {isIcon && <i className={text}></i>}
            {!isIcon && <i className="text">{text}</i>}
        </a>
    );
}
 
export default ProfileLink;