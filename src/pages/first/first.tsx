import './first.css'

export const First = () =>{
    return(
        <div className="firstcontainer">
            <div className="firstdescription">
                <h1 className="yellowfirst"><span className="italicize">FIRST</span> Tech Challenge</h1>
                <p className="ftcdescription"><span className="italicize">FIRST</span> Tech Challenge, is a robotics competition for students in grades 7–12 to compete head to head, by designing, building, and programming 
                    a robot to compete in an alliance format against other teams.</p>
                <a href="https://firstinspires.org" target="_blank" rel="noopener noreferrer"><button className="button">firstinspires.org</button></a>
            </div>
            <p>2024-2025</p>
            <div className="firstvideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ewlDPvRK4U4?si=2BVMAefiIi-qilrL" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}