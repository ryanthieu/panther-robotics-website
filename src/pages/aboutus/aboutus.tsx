import './aboutus.css'

import AboutUsPic from '../../images/place.png'

export const AboutUs = () =>{
    return(
        <div className="page-container">
        <div className="aboutusgrid">
            <div className="aboutuscolumn">
                <div className="meettheteam">
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
            <div className="aboutuscolumn">
            <img src={AboutUsPic} alt="aboutus" className="aboutuspic" />
            <h1>team picture</h1>
            </div>
        </div>
        
        </div>
    );
}

/**
 * <div className="meettheteam">
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
 */