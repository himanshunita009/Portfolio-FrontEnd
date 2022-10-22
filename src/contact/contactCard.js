import './contactCard.css';
const ContactCard = ({contact}) => {
    return (  
        <span className="contact-card">
            <span className="contact-card-icon material-icons">
                {contact.icon}
            </span>
            <span className="contact-details">
                <span className="contact-name">
                   {contact.name}
                </span>
                <span className="contact-data">
                    {contact.data}
                </span>
            </span>
        </span>
     );
}
 
export default ContactCard;