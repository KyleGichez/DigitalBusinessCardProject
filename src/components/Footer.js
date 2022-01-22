import Image3 from '../images/twitter_icon.png';
import Image4 from '../images/facebook_icon.png';
import Image5 from '../images/instagram_icon.png';
import Image6 from '../images/linkedin_icon.png';
import Image7 from '../images/github_icon.png';

function Footer(){
    return(
        <div className="Footer">
            <img src={Image3}  alt="twitter_icon" className="footer--twitter"/>
            <img src={Image4}  alt="facebook_icon" className="footer--facebook"/>
            <img src={Image5}  alt="instagram_icon" className="footer--instagram"/>
            <img src={Image6}  alt="linkedIn_icon" className="footer--linkedin"/>
            <img src={Image7}  alt="gitHub_icon" className="footer--github"/>
        </div>
    )
}
export default Footer;