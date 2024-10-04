import './footer.css'
import LogoImage from '../images/homepage.png'
import CountdownTimer from '../components/countdowntimer';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/instagram'


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
                    <span className="gradient-text-footer">Panther Robotics</span>
                    </h1>
                </div>
                </div>
                <ul className="footer-column">
                    <li className="footerelementheading">Home</li>
                    <li className="footerelement"><a href="/upload">About Us</a></li>
                    <li className="footerelement"><a href="/assignments">Awards</a></li>
                </ul>
                <ul className="footer-column">
                <li className="footerelementheading">Outreach</li>
                    <li className="footerelement">Made in 2024</li>
                    <li className="footerelement">Panther Robotics</li>
                </ul>
                <ul className="footer-column">
                    <div className="footer-grid">
                    <SocialIcon url="www.instagram.com" className="icon" />
                   
                    </div>
                    <CountdownTimer targetDate={targetDate} />
                </ul>
            </div>
            </footer>

        </div>
    );
}