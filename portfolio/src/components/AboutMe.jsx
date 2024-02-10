


export default function AboutMe() {



    return (
        <>
            <div id="about">
                <h1>ABOUT ME</h1>
                <div className="dan-container">
                    <img id="dan-img" src="../src/assets/dan.jpg" alt="image-of-me" />
                    <div className="dan-titles">
                        <h5>Junior Developer</h5>
                        <h4>Dan Edmunds</h4>
                    </div>
                </div>

                <p>I am a resilient and adaptable Software Engineer with a BSc in Business Psychology, possessing excellent communication, problem-solving, and leadership skills. I transitioned into software engineering because I am drawn to its demand for critical thinking and problem-solving, offering an outlet for creativity. Proficient in languages such as JavaScript, Python, and HTML/SASS, I strive to deliver value through user-centric web applications and software solutions. </p>
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
                    <h4>General Assembly</h4>
                    <h5>Software Engineering Immersive Student, General Assembly, Remote, 16/10/23 - 19/01/24
                    </h5>
                    <p>A 12 week bootcamp consisting of live coding instruction, pre-recorded lessons, and individual, paired, and group projects</p>
                </article>
            </div>
        </>
    )
}