import './link.css';
const Link = ({text,link}) => {
    return ( 
        <a href={link} className="mylink">{text}</a>
        );
}

export default Link;