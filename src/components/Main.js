import Image from "../images/my_main_image.jpg";
import Button from './Buttons';
import Footer from './Footer';
function Main(){
    return(
        <div className="main--container">
        <img src={Image} alt="My_image" className="profile_pic"/>
                <div className="second--container">
                <h2 className="app--title">Gichure Maina</h2>
                <h3 className="app--intro">React Frontend Developer</h3>
                <h4 className="app-text">https://www.github.com/KyleGichez</h4>
                
            <div>
                <Button/>
                </div>
                <h4 className="app--text">About</h4>
                <p className="app--details"> I am a global React frontend developer who has an active learning mindset while coding as my problem-solving techniques. I have built solutions for different enterorises all over the world and I am a remote work professional. My projects aim at solving real world problems in the travel & luxury industry.</p>

                <h4 className="app--text">Interests</h4>
                <p className="app--details">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                <Footer/>
            </div>
                    
    )
}

export default Main;