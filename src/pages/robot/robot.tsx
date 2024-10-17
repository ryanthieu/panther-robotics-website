import './robot.css'
import Trust from '../../images/trust.png'

export const Robot = () =>{
    return(
        <div>
            <h1>23-24: Trust</h1>
            <div className="robotgrid">
                <div className="robotgridimage">
                    <img src={Trust} alt="trust" />
                </div>
                <div className="robotgridtext">
                    <h1>this is trust</h1>
                    <p>Trust is the robot used in the 23-24 season. Trust does..</p>
                </div>
            </div>
        </div>
    );
}