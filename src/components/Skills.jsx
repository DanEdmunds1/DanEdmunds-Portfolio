// import django from '../assets/skills/django.png'
// import mongo from '../assets/skills/mongo.png'
// import sanity from '../assets/skills/sanity.png'
// import postgre from '../assets/skills/postgre.png'

import { Container, Row, Col } from "react-bootstrap"

import css from '../assets/skills/css.png'
import html from '../assets/skills/html-5.png'
import js from '../assets/skills/java-script.png'
import react from '../assets/skills/library.png'
import python from '../assets/skills/python.png'
import sass from '../assets/skills/sass.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import vscode from '../assets/skills/vscode.png'
import github from '../assets/github-con.png'
import boot from '../assets/skills/boot.png'
import angular from '../assets/skills/angular.png'
import typescript from '../assets/skills/typescript.png'
import magic from '../assets/skills/magic.png'
import sql from '../assets/skills/sql.png'
import tailwind from '../assets/skills/tailwind.png'


export default function Skills() {

    const skills = [

        { name: 'HTML5', img: html },
        { name: 'JavaScript', img: js },
        { name: 'CSS', img: css },
        { name: 'Sass', img: sass },
        { name: 'React', img: react },

        { name: 'TypeScript', img: typescript },
        { name: 'Magic Xpa', img: magic },
        { name: 'SQL (+ Server)', img: sql },
        { name: 'Tailwind', img: tailwind },



        { name: 'Angular', img: angular },

        { name: 'Python', img: python },
        { name: 'Bootstrap', img: boot },
        { name: 'Node.js', img: node },
        { name: 'Express.js', img: express },
        { name: 'VSCode', img: vscode },
        { name: 'GitHub', img: github },




        // { name: 'Sanity', img: sanity },
        // { name: 'Django', img: django },
        // { name: 'MongoDB', img: mongo }, 
        // { name: 'PostgreSQL', img: postgre },
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