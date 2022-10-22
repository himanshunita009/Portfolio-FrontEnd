import './contact.css';
import ContactCard from "./contactCard";
import contactInfo from "./contactInfo";
import ContactInput from "./contactInput";
import SolidButton from "../UI/solidButton/SolidButton";
import { useState } from 'react';
import PopUp from '../UI/POPUP/popupmessage/popup';
const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [description,setDescription] = useState('');
    const [popupMessage,setPopupMsg] = useState('');
    const [showPopup,setShowPopup] = useState(false);
    let data = {
        messageHead: 'Message Sending Status',
        message: popupMessage
    };
    const sendData = () => {
        setShowPopup(true);
        setPopupMsg('Sending Message to Mr. Himanshu. Please Wait...');
        fetch('https://himanshunita.herokuapp.com/firstAPI/',{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                description: description
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.text())
        .then(res => {
            setName('');
            setEmail('');
            setDescription('');
            setSubject('');
            if(res === '1')
                setPopupMsg('Message Sent Successfully.');
            else
                setPopupMsg('Error to Send Message');
        });
    }
    return ( 
    <span className="contact-back" id='contact'>
        <span className='contact-head'>
            Contact Me !
        </span> 
        <span className="contact-main">
        <span className="contact-cards">
            {contactInfo && contactInfo.map((contact) => (
                <ContactCard contact={contact}  key={contact.name}/>
            ))}
        </span>
        <span className="contact-input">
                <span className="input-two">
                    <ContactInput type="text" hint="Name" value={name} setvalue={(e) => setName(e.target.value)} />
                    <ContactInput type="email" hint="Email" value={email} setvalue={(e) => setEmail(e.target.value)} />
                </span>
                <ContactInput type="text" hint="Subject"  value={subject} setvalue={(e) => setSubject(e.target.value)}/>
                <textarea  rows="6" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </span>
        </span>
        <span className='send-button'>
            <SolidButton text="Contact Me" iconName="send" handleClick={sendData} />
        </span>
        <PopUp show={showPopup} data={data} handleClose={(status) => {
            setPopupMsg('');
            setShowPopup(status)}
            } />
    </span> 
    );
}
 
export default Contact;