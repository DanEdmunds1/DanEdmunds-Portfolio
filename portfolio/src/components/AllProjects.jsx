
export default function AllProjects() {
    return (
        <>
            <h2>Projects</h2>
            <section id="projects" className="projects">

                <div className="projects-container">
                    {/* TRAILSTRIDER */}
                    <article className="single-project">
                        <img src='../src/assets/project4.jpg' alt='project image' />
                        <div className="project-text">
                            <h3>TrailStrider</h3>
                            <h4>Individual Project - 1.5 Weeks</h4>
                            <div className="project-links">
                                <p><a href=''>ReadMe</a></p>
                                <p><a href=''>Deployment Link</a></p>
                            </div>
                        </div>
                    </article>

                    {/* GAME OF THRONES */}
                    <article className="single-project">
                        <div className="project-text">
                            <h3>Game of Thrones Full Stack</h3>
                            <h4>Group Project - 1 Week</h4>
                            <div className="project-links">
                                <p><a href=''>ReadMe</a></p>
                                <p><a href=''>Deployment Link</a></p>
                            </div>
                        </div>
                        <img src='../src/assets/project2.jpg' alt='project image' />
                    </article>

                    {/* POKEMON API */}
                    <article className="single-project">
                        <img src='../src/assets/project3.jpg' alt='project image' />
                        <div className="project-text">
                            <h3>Pokemon API</h3>
                            <h4>Paired Project - 2 Days</h4>
                            <div className="project-links">
                                <p><a href=''>ReadMe</a></p>
                                <p><a href=''>Deployment Link</a></p>
                            </div>
                        </div>
                    </article>

                    {/* BATTLESHIPS */}
                    <article className="single-project">
                        <div className="project-text">
                            <h3>Battleships Game</h3>
                            <h4>Individual Project - 1 Week</h4>
                            <div className="project-links">
                                <p><a href=''>ReadMe</a></p>
                                <p><a href=''>Deployment Link</a></p>
                            </div>
                        </div>
                        <img src='../src/assets/project1.jpg' alt='project image' />
                    </article>
                </div>
            </section>
        </>
    )
}