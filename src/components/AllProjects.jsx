

export default function AllProjects() {

    return (
        <>
            <div id="projects" className="divider"></div>
            <h2 id="projects-title">Projects</h2>
            <section className="projects">

                <div className="projects-container">
                    {/* TRAILSTRIDER */}
                    <article className="single-project">
                        <img src='../src/assets/project4.jpg' alt='project image' />
                        <div className="project-text">
                            <h3>Solo</h3>
                            <h4>Individual Project - 1.5 Weeks</h4>
                            <p>A hiking application with full CRUD capabilities for hiking trails, consisting of a Django REST Framework back-end, a PostgreSQL database, and a front-end React application that consumes the back-end.
                            </p>
                            <div className="project-links">
                                <a href='https://github.com/DanEdmunds1/TrailStrider1' target="_blank" rel="noopener noreferrer">
                                    <div className="overlay"><img id="button-img" src="../src/assets/github-icon-port.png" /></div>
                                    ReadMe</a>
                                <a href='https://trailstrider1-99ed82a02533.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/deploy.png" /></div>
                                Deployment</a>
                            </div>
                        </div>
                    </article>


                    {/* GAME OF THRONES */}
                    <article className="single-project">
                        <div className="project-text" style={{textAlign: 'right'}}>
                            <h3>GOT Full Stack</h3>
                            <h4>Group Project - 1 Week</h4>
                            <p>A CRUD compendium for the Game of Thrones book series / TV show. It has a mongoose back-end serving a MongoDB with a front-end React application. I created the Home and Index pages, the Filters, and various user reactivity.
                            </p>
                            <div className="project-links" style={{justifyContent: 'flex-end'}}>
                                <a href='https://github.com/DanEdmunds1/GameOfThrones_fullstack' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/github-icon-port.png" /></div>
                                ReadMe</a>
                                <a href='https://gameofthronesfullstack-b965d7354f59.herokuapp.com/' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/deploy.png" /></div>
                                Deployment</a>
                            </div>
                        </div>
                        <img src='../src/assets/project3.jpg' alt='project image' />
                    </article>

                    {/* POKEMON API */}
                    <article className="single-project">
                        <img src='../src/assets/project2.jpg' alt='project image' />
                        <div className="project-text">
                            <h3>Pokemon API</h3>
                            <h4>Paired Project - 2 Days</h4>
                            <p>
                                A React application that consumes a third-party Pokemon API, displaying a home, index, and single view page. It also includes a functional searchbar and dropdown for filtering Pokemon by their type(s).
                            </p>
                            <div className="project-links">
                                <a href='https://github.com/DanEdmunds1/PokemonAPI' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/github-icon-port.png" /></div>
                                ReadMe</a>
                                <a href='https://pokemonapi-ga.netlify.app/' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/deploy.png" /></div>
                                Deployment</a>
                            </div>
                        </div>
                    </article>

                    {/* BATTLESHIPS */}
                    <article className="single-project">
                        <div className="project-text" style={{textAlign: 'right'}}>
                            <h3>Battleships Game</h3>
                            <h4>Solo Project - 1 Week</h4>
                            <p>A recreation of the classic BattleShips game in JS. Players can rotate and place their ships, the enemy ships are placed by the computer with working bounds detection. The computer can track where successful hits have been made, and follow a direction until the entire ship is sunk.
                            </p>
                            <div className="project-links" style={{justifyContent: 'flex-end'}}>
                                <a href='https://github.com/DanEdmunds1/Battleships' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/github-icon-port.png" /></div>
                                ReadMe</a>
                                <a href='https://danedmunds1.github.io/Battleships/' target="_blank" rel="noopener noreferrer">
                                <div className="overlay"><img id="button-img" src="../src/assets/deploy.png" /></div>
                                Deployment</a>
                            </div>
                        </div>
                        <img src='../src/assets/project1.jpg' alt='project image' />
                    </article>
                </div>
            </section>
        </>
    )
}