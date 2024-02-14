// Skills

//// Front End
// Bootstrap

//// Other
// Trello
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
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import django from '../assets/skills/django.png'
import mongo from '../assets/skills/mongo.png'
import vscode from '../assets/skills/vscode.png'
import github from '../assets/github-con.png'
import boot from '../assets/skills/boot.png'


export default function Skills() {

    const skills = [
        { name: 'CSS', img: css },
        { name: 'HTML5', img: html },
        { name: 'JavaScript', img: js },
        { name: 'React', img: react },
        { name: 'PostgreSQL', img: postgre },
        { name: 'Python', img: python },
        { name: 'Sass', img: sass },
        { name: 'Bootstrap', img: boot },
        { name: 'Node.js', img: node },
        { name: 'Express.js', img: express },
        { name: 'Django', img: django },
        { name: 'MongoDB', img: mongo },
        { name: 'VSCode', img: vscode },
        { name: 'GitHub', img: github },
    ]

    return (
        <>
        <div id="skills" className="divider"></div>
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
                                <div className="image-container">
                                    <img key={i} src={skill.img} alt="skill" />
                                    <p>{skill.name}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}