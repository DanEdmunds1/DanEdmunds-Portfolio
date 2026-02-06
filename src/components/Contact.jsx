import email from '../assets/mail-con.png'
import linkedin from '../assets/linkedin-con.png'
import github from '../assets/github-con.png'


export default function Contact() {



    return (
        <>
        <div id="contact" className="divider"></div>
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-container">
        <div><img src={email} alt="email-icon"/><span>:</span><a href="mailto:dan.edmunds7@gmail.com">dan.edmunds7@gmail.com</a></div>

        <div><img src={linkedin} alt="linkedin-icon"/><span>:</span><a href="https://www.linkedin.com/in/dan-edmunds/">LinkedIn</a></div>

        <div><img src={github} alt="github-icon"/><span>:</span><a href="https://github.com/DanEdmunds1">GitHub</a></div>
        </div>
        </>
    )
}