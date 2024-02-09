import { Link } from "react-router-dom"


export default function Nav() {

    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-items">
                    <Link to='/'>
                        <div id="nav-home" className="nav-item">
                            <img className="nav-icon" src="../src/assets/home.png" alt="" />
                            <p>HOME</p>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className="nav-item">
                            <img className="nav-icon" src="../src/assets/me.png" alt="" />
                            <p>ABOUT ME</p>
                        </div>
                    </Link>

                    <Link to='/contact'>
                        <div id="nav-contact" className="nav-item">
                            <img className="nav-icon" src="../src/assets/mail.png" alt="" />
                            <p>CONTACT</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}