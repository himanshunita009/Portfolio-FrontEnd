import './solidButton.css'
const SolidButton = ({text,iconName,handleClick}) => {
    return ( 
        <span className='solidButton' onClick={handleClick}>
            <span className="button-text">{text}</span>
            <i className="material-icons">{iconName}</i>
        </span> 
    );
}
 
export default SolidButton;