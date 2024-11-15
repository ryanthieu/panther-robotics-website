import './homepage.css'
import FTCImage from '../../images/intothedeep.png'
import Robot from '../../images/robot.png'
import Panthera from '../../images/panthera.png'
import NewLogo from '../../images/homepage.png'
import Treat from '../../images/treat.png'
import Barnes from '../../images/barnes.png'
import PISD from '../../images/pisd.png'
import HomeImageBrowser from '../../components/homeimage'


export const Homepage = () =>{
    
    
    return(
        <div>
             <div className="homepage-grid">
                <div className="left-homepage-grid">
                <img src={Panthera} alt="panthera" className="panthera"/>
                <h2><span className="italicize">FIRST</span> Tech Challenge</h2>
                <h2>Team 12926</h2>
                <a href="/aboutus"><button className="button">Learn More</button></a>
                </div>
                <div className="right-homepage-grid">
                <img src={Robot} alt="robot" className="robot-image"/>
                </div>
             </div>
             
            <div className="abouttheteam">
                <hr className="homedivide"/>
                <img src={NewLogo} alt="logo" className="descriptionlogo"/>
                <h1 className="yellowtext">Eastside Pride</h1>
                <p>We are Team #12926, Panther Robotics based in Plano, Texas.<br /><br />When we aren't competing in FTC, we help in the community through 
                informational workshops and mentorship.</p>
                <a href="/aboutus"><button className="button">About Us</button></a>
                <hr className="homedivide"/>
                <HomeImageBrowser />
                <p>Follow us on social media to learn more about our team and our community outreach!</p>
            </div>
            <hr className="homedivide"/>
            <div className="whatisparent">
                <div className="whatisleft">
                    <img src={FTCImage} alt="FTC" className="ftcimage"></img>
                </div>
                <div className="whatisright">
                <a href="/first"><button className="button2">Learn More</button></a>
                </div>
            </div>
            <hr className="homedivide" />
            <div className="sponsors-section">
                <h1 className="sponsors-text">Our Sponsors</h1>
                <div className="sponsorsgrid">
                    <div className="sponsor-column1">
                        <img src={PISD} alt="PISD" className="sponsorimage1"/>
                        <h2>Plano Independent School District</h2>
                        <a href="https://www.pisd.edu" target="_blank" rel="noreferrer" className="sponsor-links"><p>pisd.edu</p></a>
                    </div>
                    <div className="sponsor-column2">
                        <img src={Barnes} alt="barnes and noble" className="sponsorimage2"/>
                        <h2>Barnes and Noble</h2>
                        <a href="https://www.barnesandnoble.com" target="_blank" rel="noreferrer" className="sponsor-links"><p>barnesandnoble.com</p></a>
                    </div>
                    <div className="sponsor-column3">
                        <img src={Treat} alt="treatyoself" className="sponsorimage3"/>
                        <h2>Treat Yo Self</h2>
                        <a href="https://treatyoselfplano.com" target="_blank" rel="noreferrer" className="sponsor-links"><p>treatyoselfplano.com</p></a>
                    </div>
                </div>
            </div>
           
        </div>
    );
}