import './aboutus.css'

import AboutUsPic from '../../images/place.png'

export const AboutUs = () =>{
    return(
        <div className="page-container">
        <div className="aboutusgrid">
            <div className="aboutuscolumn">
                <h1>about us</h1>
                <p>about us paragraph</p>
            </div>
            <div className="aboutuscolumn">
            <img src={AboutUsPic} alt="aboutus" className="aboutuspic" />
            <h1>about us</h1>
            </div>
        </div>
        <div className="meettheteam">
            <h1>Meet the Team</h1>
            <img src={AboutUsPic} alt="meettheteam" className="meettheteampic" />
            <h1>Team Members</h1>
            <div className="member-container">
                <div className="member-column">
                <h2>Programming:</h2>
                <p>Ryan Thieu</p>
                <p>Sanabhi</p>
                <p>Sean</p>
                <p>Haren</p>
                </div>
                <div className="member-column">
                    <h2>Engineering:</h2>
                    <p>Manan Shah</p>
                </div>
            </div>
            <div className="member-column-centered">
                <h2>Documentation:</h2>
                <p>Example</p>
            </div>
        </div>
        </div>
    );
}