import {Link} from 'react-router-dom';
import './navbar.css'
import Logo from '../images/homepage.png'
export const Navbar = () => {
    return(
        <div>
        <nav className="nav">
        <div className="navbar">
            <div className="logo-container">
            <Link to="/"><img src={Logo} alt="logo" className="logoimage" /></Link>
            </div>
          <div className="nav-links">
          <Link to ="/aboutus" className="navbarlink">About Us</Link>
            <Link to ="/outreach" className="navbarlink">Outreach</Link>
            <Link to ="first" className="navbarlink">FIRST</Link>
            <>
            <div className="nav-links">
            <Link to="learnmore">
            <button type="button" className="button">Learn More</button></Link>
            </div>
            </>
            </div>
        </div>
        </nav>
        <hr className="navbarhr"/>
        </div>
    );
}



export const Navbar2 = () => {
    return(
        <div>
        <nav className="nav">
        <div className="navbar">
            <div className="logo-container">
            <Link to="/"><img src={Logo} alt="logo" className="logoimage" /></Link>
            </div>
          <>
            <div className="nav-links">
            <Link to="login">
            <button type="button" className="button">Sign in</button></Link>
            </div>
            </>
          <div className="nav-links">
          <Link to ="/upload" className="navbarlink">Upload</Link>
            <Link to ="/assignments" className="navbarlink">Assignments</Link>
            
           
          
            </div>
        </div>
        </nav>
        <hr className="navbarhr"/>
        </div>
    );
}