import './homepage.css'
import FTCImage from '../../images/intothedeep.png'
import CountdownTimer from '../../components/countdowntimer';
import Panther from '../../images/panther.png'
import Robotic from '../../images/panther.png'
import Mountain from '../../images/place.png'
import Layout from "../../components/layout/layout";
import East from '../../images/east.png'
import GalleryDiv from "../../components/layout/gallerydiv";

export const Homepage = () =>{
    const targetDate = new Date("2024-11-16T09:00:00");
    
    return(
        <div>
             <div className="parent-centered-container">
                <div className="centered-container">
                    <h1>Panther Robotics</h1>
                    <p className="para">FIRST Tech Challenge<br /> Team 12926</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="abouttheteam">
                <h1>recent snapshots</h1>
                <p>follow us on our social media to get more updates</p>
                <hr />
                <p>scroll to see recent photos!</p>
                <Layout>
                    <GalleryDiv>
                        <img src={FTCImage} alt="place"></img>
                        <img src={Panther} alt="panther" />
                        <img src={Robotic} alt="robotic"/>
                        <img src={Mountain} alt="mountain" />
                        <img src={East} alt="east" />
                    </GalleryDiv>       
                </Layout>
                <hr />
                <h1>who are we</h1>
                <p>we are team #12926</p>
                <button>Example Button</button>
            </div>
            <div className="homehr">
                <hr />
            </div>
            <div className="whatisparent">
                <div className="whatisleft">
                    <img src={FTCImage} alt="FTC" className="ftcimage"></img>
                </div>
                <div className="whatisright">
                <h1>What is FTC?</h1>
                <p>FTC is the FIRST Tech Challenge</p>
                </div>
            </div>
            <div className="countdowntimer">
            <CountdownTimer targetDate={targetDate} />
            </div>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ETTb8OJtAXOa64V7IiuHU3SWvk7-fOQ&ehbc=2E312F" width="640" height="480" title="competitionmap"></iframe>
        </div>
    );
}