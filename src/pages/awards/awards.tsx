import './awards.css'
import AwardsPic from '../../images/awards.png'
import AwardsFont from '../../images/awardsfont.png'

export const Awards = () => {
    return(
        <div>
            <div className="awards-grid">
                <div className="awards-column">
                    <img src={AwardsFont} alt="awardsfont" className="awards-font"/>
                    <ul>

                    <h2>Regional Tournament:</h2>
                    <li>Control Award 1st Place</li>

                    <li>Semi-Regional (South):</li>

                    <li>Inspire Award 1st Place</li>

                    <li>Think Award 2nd Place</li>

                    <li>F&M Tournament:</li>

                    <li>Control Award sponsored by Arm, Inc.</li>

                    <li>Design Award 2nd Place</li>

                    <li>Finalist Alliance - 2nd Team Selected</li>
                    <h2>Current</h2>

                    <li>F League Regional Tournament</li>
                    </ul>
                </div>
                <div className="awards-column">
                    <img src={AwardsPic} alt="awards" className="awards-pic"/>
                </div>
            </div>
        </div>
    )
}