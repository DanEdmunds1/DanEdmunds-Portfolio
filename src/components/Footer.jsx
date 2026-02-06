import githubIcon from '../assets/github-icon-port.png'
import linkedinIcon from '../assets/linkedin-icon-port.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>Dan Edmunds {currentYear}
                <a href="https://github.com/danedmunds1" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="footer-icon" alt="GitHub Link" /></a>
                <a href="https://www.linkedin.com/in/dan-edmunds/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} className="footer-icon" alt="Linkedin Link" /></a>
        </footer>
    )
}