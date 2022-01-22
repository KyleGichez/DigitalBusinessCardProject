import Image1 from "../images/first_icon.png";
import Image2 from "../images/linkedin_icon.png";

function Button(){
    return(
        <div className="Buttons">
        <button className="button--one"><img src={Image1} alt="email_icon" className="icon_one"/>Email</button>
        <button className="button--two"><img src={Image2} alt="linkedIn_icon" className="icon_two"/>LinkedIn</button>
        </div>
    )
}

export default Button;