import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import githubIcon from '../assets/github-icon-port.png'
import deploy from '../assets/deploy.png'
// import { useState } from 'react'

// import Description from './Description'





export default function AllProjects() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const projects = [
        {
            img: project4,
            title: 'TrailStrider',
            timeframe: 'Solo Project - 10 Days',
            text: 'A hiking application with full CRUD capabilities for hiking trails, consisting of a Django REST Framework back-end, a PostgreSQL database, and a front-end React application that consumes the back-end.',
            readmeLink: 'https://github.com/DanEdmunds1/TrailStrider1',
            deployLink: 'https://trailstrider1-99ed82a02533.herokuapp.com/'
        },
        {
            img: project3,
            title: 'GOT Full Stack',
            timeframe: 'Group Project - 7 Days',
            text: 'A CRUD compendium for the Game of Thrones book series / TV show. It has a mongoose back-end serving a MongoDB and a front-end React application. I created the Home and Index pages, the Filters, and various user reactivity.',
            readmeLink: 'https://github.com/DanEdmunds1/GameOfThrones_fullstack',
            deployLink: 'https://gameofthronesfullstack-b965d7354f59.herokuapp.com/'
        },
        {
            img: project2,
            title: 'Pokemon API',
            timeframe: 'Paired Project - 2 Days',
            text: 'A React application that consumes a third-party Pokemon API, displaying a home, index, and single view page. It also includes a functional searchbar and dropdown for filtering Pokemon by their type(s).',
            readmeLink: 'https://github.com/DanEdmunds1/PokemonAPI',
            deployLink: 'https://pokemonapi-ga.netlify.app/'
        },
        {
            img: project1,
            title: 'Battleships',
            timeframe: 'Solo Project - 7 Days',
            text: 'A recreation of the classic BattleShips game in JS. Players can rotate and place their ships, enemy ships are placed by the computer with working bounds detection. The computer tracks where successful hits have been made, and follow a direction until the entire ship is sunk.',
            readmeLink: 'https://github.com/DanEdmunds1/Battleships',
            deployLink: 'https://danedmunds1.github.io/Battleships/'
        },
    ]

    return (
        <>


            <div id="projects" className="divider"></div>
            <h2 id="projects-title">PROJECTS</h2>
            <section className="projects">

                <div className="projects-container">
                    {projects.map((project, i) => {

                        return (

                                <article key={i} className="single-project">
                                    <img src={project.img} alt='project image' />
                                    <div className="project-text">
                                        <h3>{project.title}</h3>
                                        <h4>{project.timeframe}</h4>
                                        <p>{project.text}</p>
                                        <div className="project-links">
                                            <a href={project.readmeLink} target="_blank" rel="noopener noreferrer">
                                                <div className="overlay"><img id="button-img" src={githubIcon} /></div>
                                                ReadMe</a>
                                            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                                                <div className="overlay"><img id="button-img" src={deploy} /></div>
                                                Deployment</a>
                                        </div>
                                    </div>
                                </article>
             
                        )
                    })}

                </div>
            </section>
        </>
    )
}