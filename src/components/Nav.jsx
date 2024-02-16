import home from '../assets/home.png'
import home1 from '../assets/home1.png'
import projects from '../assets/projects.png'
import projects1 from '../assets/projects1.png'
import me from '../assets/me.png'
import me1 from '../assets/me1.png'
import mail from '../assets/mail.png'
import mail1 from '../assets/mail1.png'
import skills from '../assets/skills.png'
import skills1 from '../assets/skills1.png'


import { useState } from 'react'

export default function Nav() {

    const [hoverHome, setHoverHome] = useState(false)
    const [hoverMe, setHoverMe] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)
    const [hoverProjects, setHoverProjects] = useState(false)
    const [hoverSkills, setHoverSkills] = useState(false)

    return (

        <div className="nav-container">
            <div className="nav">
                <div className="nav-items">

                    <a href='#' id="nav-home" className="nav-item"
                        onMouseEnter={() => setHoverHome(true)}
                        onMouseLeave={() => setHoverHome(false)} 
                        onClick={() => window.scrollTo(0, 0)}>
                        {hoverHome ? (
                            <img className="nav-icon" src={home1} alt="" />
                        ) : (
                            <img className="nav-icon" src={home} alt="" />
                        )}
                        <p>HOME</p>
                    </a>

                    <a id="nav-about" href='#about' className="nav-item"
                        onMouseEnter={() => setHoverMe(true)}
                        onMouseLeave={() => setHoverMe(false)}>
                        {hoverMe ? (
                            <img className="nav-icon" src={me1} alt="" />
                        ) : (
                            <img className="nav-icon" src={me} alt="" />
                        )}
                        <p>ABOUT</p>
                    </a>

                    <a id="nav-projects" href='#projects' className="nav-item"
                        onMouseEnter={() => setHoverProjects(true)}
                        onMouseLeave={() => setHoverProjects(false)}>
                        {hoverProjects ? (
                            <img className="nav-icon" src={projects1} alt="" />
                        ) : (
                            <img className="nav-icon" src={projects} alt="" />
                        )}
                        <p>PROJECTS</p>
                    </a>

                    <a id="nav-skills" href='#skills' className="nav-item"
                        onMouseEnter={() => setHoverSkills(true)}
                        onMouseLeave={() => setHoverSkills(false)}>
                        {hoverSkills ? (
                            <img className="nav-icon" src={skills1} alt="" />
                        ) : (
                            <img className="nav-icon" src={skills} alt="" />
                        )}
                        <p>SKILLS</p>
                    </a>

                    <a href='#contact' id="nav-contact" className="nav-item"
                        onMouseEnter={() => setHoverContact(true)}
                        onMouseLeave={() => setHoverContact(false)}>
                        {hoverContact ? (
                            <img className="nav-icon" src={mail1} alt="" />
                        ) : (
                            <img className="nav-icon" src={mail} alt="" />
                        )}
                        <p>CONTACT</p>
                    </a>

                </div>
            </div>
        </div>
    )
}