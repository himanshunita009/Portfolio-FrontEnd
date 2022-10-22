import './contactInput.css';
const ContactInput = ({type,hint,value,setvalue}) => {
    return ( 
        <input type={type} placeholder={hint} name={hint} className='input' value={value} onChange={setvalue}/>
     );
}
 
export default ContactInput;