import './aboutus.css'

import AboutUsPic from '../../images/team.png'
import Headshot from '../../images/headshot.png'
//import AboutImageScroll from '../../components/aboutimagescroll'
export const AboutUs = () =>{
    return(
        <div>
        <div className="page-container">
        <div className="aboutusgrid">
            <div className="aboutuscolumn">
                <div className="meettheteam">
            <h1>Team 12926</h1>
            <p>brief description</p>
        </div>
            </div>
            <div className="aboutuscolumn">
            <img src={AboutUsPic} alt="aboutus" className="aboutuspic" />
            <h3>team picture</h3>
            </div>
        </div>
        
        </div>
        <div className="teamcaptain">
            <h1 className="aboutheading"> Team Captain</h1>
            <hr className="aboutheadinghr" />
            <div className="programming-member">
                <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Dev Patel</h2>
                    <p className="aboutdescriptions">Hi, I'm Dev Patel and I'm a senior at Plano East Senior High School.</p>
            </div>

        </div>
        <div className="programming-descriptions">
            <h1 className="aboutheading">Programming</h1>
            <hr className="aboutheadinghr"/>
            <div className="programming-grid">
                <div className="programming-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Ryan Thieu</h2>
                    <p className="aboutdescriptions">Hi, I'm Ryan Thieu and I'm a junior at Plano East Senior High School.</p>
                </div>
                <div className="programming-member">
                <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Haren Thorat</h2>
                    <p className="aboutdescriptions">Hi, I'm Haren Thorat and I'm a senior at Plano East Senior High School.</p>
                </div>
                <div className="programming-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Sean Aiuvalasit</h2>
                </div>
                <div className="programming-member programming-member-centered">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Ren P</h2>
                </div>
            </div>
        </div>
        <div className="engineering-descriptions">
            <h1>Engineering</h1>
            <hr className="aboutheadinghr"/>
            <div className="engineering-grid">
                <div className="engineering-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Mikail Rizvi</h2>
                </div>
                <div className="engineering-member">
                <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Saura Agarwal</h2>
                </div>
                <div className="engineering-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Amir Murshed</h2>
                </div>
                <div className="engineering-member engineering-member-centered">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Ain Rubio</h2>
                </div>
                <div className="engineering-member engineering-member-centered">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Manan Shah</h2>
                </div>
            </div>
        </div>
        <div className="documentation-descriptions">
            <h1>Documentation</h1>
            <hr className="aboutheadinghr"/>
            <div className="documentation-grid">
                <div className="documentation-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Kris Ruiz</h2>
                </div>
                <div className="documentation-member">
                <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Suditi Shrestha</h2>
                </div>
                <div className="documentation-member">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Jasper Khan</h2>
                </div>
                <div className="documentation-member documentation-member-centered">
                    <img src={Headshot} alt="headshot" className="headshot"/>
                    <h2 className="aboutnames">Riya Nagaraddi</h2>
                </div>
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

        /*<div className="member-container">
                <div className="member-column">
                <h2>Programming:</h2>
                <p>Ryan Thieu</p>
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
                <p>Kris Ruiz</p>
                <p>Suditi</p>
            </div>*/ 