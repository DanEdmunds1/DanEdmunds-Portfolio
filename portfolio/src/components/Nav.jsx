
import { useState } from 'react'


export default function Nav() {

    const [hoverHome, setHoverHome] = useState(false)
    const [hoverMe, setHoverMe] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)
    const [hoverProjects, setHoverProjects] = useState(false)

    return (

        <div className="nav-container">
            <div className="nav">
                <div className="nav-items">

                    <a href='#' id="nav-home" className="nav-item"
                        onMouseEnter={() => setHoverHome(true)}
                        onMouseLeave={() => setHoverHome(false)} 
                        onClick={() => window.scrollTo(0, 0)}>
                        {hoverHome ? (
                            <img className="nav-icon" src="../src/assets/home1.png" alt="" />
                        ) : (
                            <img className="nav-icon" src="../src/assets/home.png" alt="" />
                        )}
                        <p>HOME</p>
                    </a>

                    <a href='#about' className="nav-item"
                        onMouseEnter={() => setHoverMe(true)}
                        onMouseLeave={() => setHoverMe(false)}>
                        {hoverMe ? (
                            <img className="nav-icon" src="../src/assets/me1.png" alt="" />
                        ) : (
                            <img className="nav-icon" src="../src/assets/me.png" alt="" />
                        )}
                        <p>ABOUT ME</p>
                    </a>


                    <a href='#projects' className="nav-item"
                        onMouseEnter={() => setHoverProjects(true)}
                        onMouseLeave={() => setHoverProjects(false)}>
                        {hoverProjects ? (
                            <img className="nav-icon" src="../src/assets/projects1.png" alt="" />
                        ) : (
                            <img className="nav-icon" src="../src/assets/projects.png" alt="" />
                        )}
                        <p>PROJECTS</p>
                    </a>


                    <a href='#contact' id="nav-contact" className="nav-item"
                        onMouseEnter={() => setHoverContact(true)}
                        onMouseLeave={() => setHoverContact(false)}>
                        {hoverContact ? (
                            <img className="nav-icon" src="../src/assets/mail1.png" alt="" />
                        ) : (
                            <img className="nav-icon" src="../src/assets/mail.png" alt="" />
                        )}
                        <p>CONTACT</p>
                    </a>

                </div>
            </div>
        </div>
    )
}