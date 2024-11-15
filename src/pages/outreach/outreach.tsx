import './outreach.css'
import OutreachExample from '../../images/outreachex.png'
import Mentor from '../../images/mentor.png'
import Booth from '../../images/booth.png'
import Teach from '../../images/teach.png'
export const Outreach = () =>{
    return(
        <div>
            <h1>Outreach</h1>
            <div className="top-outreach-grid">
                <div className="top-outreach-image">
                    <img src={OutreachExample} alt="outreach" className="top-image"/>
                </div>
                <div className="top-outreach-text">
                    <h1>Annual Stem Expo</h1>
                    <p>example description</p>
                </div>
            </div>
            <div className="three-grid">
                <div className="three-grid-column1">
                    <div>
                        <img src={Booth} alt="outreach"  className="grid-image"/>
                        <h1>Pal-O-Ween 2024</h1>
                        <p>example description</p>
                    </div>
                </div>
                <div className="three-grid-column2">
                    <div>
                        <img src={Mentor} alt="outreach" className="grid-image"/>
                        <h1>Mentoring Other FTC Teams</h1>
                        <p>example description</p>
                    </div>
                </div>
                <div className="three-grid-column3">
                    <div>
                        <img src={Teach} alt="outreach" className="grid-image"/>
                        <h1>Teaching Others</h1>
                        <p>example description</p>
                    </div>
                </div>
                


            </div>

        </div>

    )
}