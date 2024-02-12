


export default function AboutMe() {



    return (
        <>
            <div id="about" className="divider"></div>
            <div className="about">
                <h2>ABOUT ME</h2>
                <div className="dan-container">
                    <img id="dan-img" src="../src/assets/dan.jpg" alt="image-of-me" />
                    <div className="dan-titles">
                        <h5>Junior Developer</h5>
                        <h4>Dan Edmunds</h4>
                    </div>
                </div>

                <p className="bio">For a long time I was drawn to Software Development by its demand for problem solving and critical thinking, but I did not pursue a career in software until a good friend / former colleague pushed me to learn the skills required.
                    After completing the pre-work for the General Assembly bootcamp I was hooked on Web Development, and graduating from the course solidified my passion for coding.
                </p>
                <h3 id="creatures">My Creatures</h3>
                <div className="dog-section">
                    <div className="dog">
                        <img src="../src/assets/cooper.jpg" alt="image-of-dog" />
                        <h4>Cooper</h4>
                        <p>A good boy who enjoys walks and swimming</p>
                    </div>
                    <div className="dog">
                        <img src="../src/assets/freddie.jpg" alt="image-of-dog" />
                        <h4>Freddie</h4>
                        <p>Falls asleep at the desk instead of coding</p>
                    </div>

                </div>


                <article className="about-section">
                    <h3>Education</h3>
                    <div className="school">
                        <h4>General Assembly</h4>
                        <h5>Software Engineering Immersive Student, General Assembly, Remote, 16/10/23 - 19/01/24
                        </h5>
                        <p>A 12 week bootcamp consisting of live coding instruction, pre-recorded lessons, and individual, paired, and group projects</p>
                    </div>

                    <div className="school">
                        <h4>Loughborough University</h4>
                        <h5>BSc Business Psychology, Loughborough University, Loughborough, October 2019 - June 2023
                        </h5>
                        <p>Achieved an Upper Second Class Degree with an additonal Diploma in Professional Studies from a Professional Training Placement </p>
                    </div>

                </article>
            </div>
        </>
    )
}