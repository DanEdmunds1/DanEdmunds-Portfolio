// Skills

//// Front End
// JS
// React
// HTML5
// CSS3
// SASS
// Bootstrap
// Python

//// Back End
// Express.js
// Django REST Franework
// Node.js

//// DBs
// MongoDB
// PostgreSQL

//// Other
// Trello
// VS Code
// GitHub
// Insomnia
import { Container, Row, Col } from "react-bootstrap"

import css from '../assets/skills/css.png'
import html from '../assets/skills/html-5.png'
import js from '../assets/skills/java-script.png'
import react from '../assets/skills/library.png'
import postgre from '../assets/skills/postgre.png'
import python from '../assets/skills/python.png'
import sass from '../assets/skills/sass.png'




export default function Skills() {

    const skills = [css, html, js, react, postgre, python, sass
    ]

    return (
        <>
            <h2>SKILLS</h2>

            <Container fluid className="skills-grid">
                <Row className="skills-list">
                    {skills.map((skill, i) => {
                        return (
                            <Col className="skill" 
                            key={i} 
                            xs={6} 
                            md={4} 
                            lg={3}>
                                <img key={i} src={skill} alt="skill" />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}