import dan from '../assets/dan.jpg'
import cooper from '../assets/cooper.jpg'
import freddie from '../assets/freddie.jpg'

import { Container, Row, Col } from "react-bootstrap"
import AudioPlayer from './AudioPlayer'

import guitar from '../assets/guitar.wav'




export default function AboutMe() {

    const interests = [
        { title: 'Nature', text: 'My ideal environment is one with lots of greenery and plenty of sunlight. I spent 5 Summers working as a Camp Counsellor in NH, US', img: dan },
        { title: 'Fitness', text: 'I used to rock climb and play badminton but now I mostly just go to the gym to lift weights. I find its a great way to strengthen my mind as well as my body', img: cooper },
        { title: 'Gaming', text: 'Growing up I played mostly single-player RPGs and still tend to lean towards that genre.', img: freddie },
        { title: 'Music', text: 'I started teaching myself guitar when I was 16 and have been doing so on and off ever since. I mainly play acoustic as I primarily enjoy finger picking', img: dan }
    ]


    return (
        <>
            {/* <div id="about" className="divider"></div> */}
            <div id="about" className="about">
                <h2>ABOUT ME</h2>
                <div className="img-text">
                    <div className="dan-container">
                        <img id="dan-img" src={dan} alt="image-of-me" />
                        <div className="dan-titles">
                            <h5>Junior Developer</h5>
                            <h4>Dan Edmunds</h4>
                        </div>
                    </div>
                    <p className="bio">For a long time I was drawn to Software Development by its demand for problem solving and critical thinking, but I did not pursue a career in software until a good friend / former colleague pushed me to learn the skills required.
                        After completing the pre-work for the General Assembly bootcamp I was hooked on Web Development, and graduating from the course solidified my passion for coding.
                    </p>
                </div>

                <h3 id="interests">INTERESTS</h3>
                <Container className='interests'>
                    <Row className='interest-row'>
                        <Col id="nature" className='interest'>
                            <h4>Nature</h4>
                            <p>My ideal environment is one with lots of greenery and plenty of sunlight. I spent 5 Summers working as a Camp Counsellor in NH, USA, where the image at the top was taken</p>
                        </Col>
                        <Col id="fitness" className='interest'>
                            <h4>Fitness</h4>
                            <p>I used to rock climb and play badminton but now I mostly just go to the gym to lift weights. I find it's a great way to strengthen my mind as well as my body</p>
                        </Col>
                        <Col id ="gaming" className='interest'>
                            <h4>Gaming</h4>
                            <p>Growing up I played mostly single-player RPGs and still tend to lean towards that genre.</p>
                            <p>My favorite games include:</p>
                            <div className='list'>
                                <p>Borderlands 2</p>
                                <p>Red Dead Redemption 2</p>
                                <p>Baldurs Gate 3</p>
                                <p>Celeste</p>
                                <p>Elden Ring</p>
                            </div>

                        </Col>
                        <Col id="music" className='interest'>
                            <h4>Music</h4>
                            <p>I started teaching myself guitar when I was 16 and have been doing so on and off ever since. I mainly play acoustic as I primarily enjoy finger picking</p>
                            
                            <AudioPlayer url={guitar}/>
                        </Col>
                    </Row>
                </Container>


                <h3 id="creatures">CREATURES</h3>
                <div className="dog-section">
                    <div id="cooper" className="dog">
                        <img src={cooper} alt="image-of-dog" />
                        <h4>Cooper</h4>
                        <p>A good boy who enjoys walks and swimming</p>
                    </div>
                    <div className="dog">
                        <img src={freddie} alt="image-of-dog" />
                        <h4>Freddie</h4>
                        <p>Falls asleep at the desk instead of coding</p>
                    </div>

                </div>


                <article className="about-section">
                    <h3>EDUCATION</h3>
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