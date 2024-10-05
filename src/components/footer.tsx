import './footer.css'
import LogoImage from '../images/homepage.png'
import CountdownTimer from '../components/countdowntimer';
//import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/instagram'
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import Panthera from '../images/panthera.png'
import HomeFooter from '../images/homefooter.png'
import OutreachFooter from '../images/outreachfooter.png'
//import {FaLinkedin} from 'react-icons/fa'


export const Footer = () => {
    const targetDate = new Date("2024-11-16T09:00:00");
    return(
        <div>
           <hr className="footerhr" />
           <footer className="footer">
                <div className="footer-container">
                    <div className="footer__content">
                    <div className="footer__section footer__section--main">
                    <img src={LogoImage} alt="Logo" className="footer__logo" width="1000" height="1000" />
                    <h1 className="custom-heading">
                    <img src={Panthera} alt="footer text" className="footer-text"/>
                    </h1>
                </div>
                </div>
                <ul className="footer-column">
                    <img src={HomeFooter} alt="home" className="footer-heading-image"/>
                    <li className="footerelement"><a href="/aboutus" className="footerlinks">About Us</a></li>
                    <li className="footerelement"><a href="/awards" className="footerlinks">Awards</a></li>
                </ul>
                <ul className="footer-column">
                    <div>
                    <img src={OutreachFooter} alt="outreach" className="footer-heading-image2"/>
                    </div>
                    <li className="footerelement">Made in 2024</li>
                    <li className="footerelement">Panther Robotics</li>
                </ul>
                <ul className="footer-column">
                    <div className="footer-grid">
                    <IconContext.Provider value={{ color: "yellow", size:"2.5em", className: "instagram-icon" }}>
                    <div>
                    <a href="https://www.instagram.com/panther.robotics.pesh/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                    </a>
                    </div>
                    </IconContext.Provider>
                    
                   
                    </div>
                    <CountdownTimer targetDate={targetDate} />
                </ul>
            </div>
            </footer>

        </div>
    );
}