import { Link } from "react-router-dom"
import { useState } from 'react'


export default function Nav() {

    const [hoverHome, setHoverHome] = useState(false)
    const [hoverMe, setHoverMe] = useState(false)
    const [hoverContact, setHoverContact] = useState(false)


    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-items">
                    <Link to='/'>
                        <div id="nav-home" className="nav-item"
                            onMouseEnter={() => setHoverHome(true)}
                            onMouseLeave={() => setHoverHome(false)}>
                            {hoverHome ? (
                                <img className="nav-icon" src="../src/assets/home1.png" alt="" />
                            ) : (
                                <img className="nav-icon" src="../src/assets/home.png" alt="" />
                            )}
                            <p>HOME</p>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className="nav-item" 
                         onMouseEnter={() => setHoverMe(true)}
                         onMouseLeave={() => setHoverMe(false)}>
                        {hoverMe ? (
                                <img className="nav-icon" src="../src/assets/me1.png" alt="" />
                            ) : (
                                <img className="nav-icon" src="../src/assets/me.png" alt="" />
                            )}
                            <p>ABOUT ME</p>
                        </div>
                    </Link>

                    <Link to='/contact'>
                        <div id="nav-contact" className="nav-item" 
                         onMouseEnter={() => setHoverContact(true)}
                         onMouseLeave={() => setHoverContact(false)}>
                        {hoverContact ? (
                                <img className="nav-icon" src="../src/assets/mail1.png" alt="" />
                            ) : (
                                <img className="nav-icon" src="../src/assets/mail.png" alt="" />
                            )}
                            <p>CONTACT</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}