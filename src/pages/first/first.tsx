import './first.css'

export const First = () =>{
    return(
        <div className="firstcontainer">
            <div className="firstdescription">
                <h1 className="yellowfirst"><span className="italicize">FIRST</span> Robotics</h1>
                <p><span className="italicize">FIRST</span> is a organization dedicated to helping others explore the STEM fields.</p>
                <p><span className="italicize">FIRST</span> helps innovators dive into concepts that build their future careers.</p>
                <a href="https://firstinspires.org" target="_blank" rel="noopener noreferrer"><button className="button">firstinspires.org</button></a>
            </div>
            <p>2024-2025</p>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ewlDPvRK4U4?si=2BVMAefiIi-qilrL" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}