import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <>
            <div className="hero">
                <div className="name-box">
                    <h1>DAN EDMUNDS</h1>
                    <h3>Junior Developer</h3>
                </div>
            </div>
            <Link to='/projects'><button>Color Schemes</button></Link>

            <section className="projects-section">
                <h2>Projects</h2>

                {/* TRAILSTRIDER */}
                <article className="single-project">
                    <h3>TrailStrider</h3>
                    <h4>Individual Project - 1.5 Weeks</h4>
                    <img src='../src/assets/project4.jpg' alt='project image' />
                    <div className="project-links">
                        <p><a href=''>ReadMe</a></p>
                        <p><a href=''>Deployment Link</a></p>
                    </div>
                </article>

                {/* GAME OF THRONES */}
                <article className="single-project">
                    <h3>Game of Thrones Full Stack</h3>
                    <h4>Group Project - 1 Week</h4>
                    <img src='../src/assets/project2.jpg' alt='project image' />
                    <div className="project-links">
                        <p><a href=''>ReadMe</a></p>
                        <p><a href=''>Deployment Link</a></p>
                    </div>
                </article>

                {/* POKEMON API */}
                <article className="single-project">
                    <h3>Pokemon API</h3>
                    <h4>Paired Project - 2 Days</h4>
                    <img src='../src/assets/project3.jpg' alt='project image' />
                    <div className="project-links">
                        <p><a href=''>ReadMe</a></p>
                        <p><a href=''>Deployment Link</a></p>
                    </div>
                </article>

                {/* BATTLESHIPS */}
                <article className="single-project">
                    <h3>Battleships Game</h3>
                    <h4>Individual Project - 1 Week</h4>
                    <img src='../src/assets/project1.jpg' alt='project image' />
                    <div className="project-links">
                        <p><a href=''>ReadMe</a></p>
                        <p><a href=''>Deployment Link</a></p>
                    </div>
                </article>

            </section>


        </>
    )
}