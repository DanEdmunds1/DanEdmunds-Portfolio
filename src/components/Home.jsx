import { Link } from 'react-router-dom'
import Contact from './Contact'
import AllProjects from './AllProjects'
import AboutMe from './AboutMe'



export default function Home() {

    return (
        <>
            <div className="hero">
                <div className="name-box">
                    <h1>DAN EDMUNDS</h1>
                    <h3>Junior Developer</h3>
                </div>
            </div>
            <p>image by <a href="https://www.noahbournsphotography.com/">&#64;noahbourns</a></p>
            {/* <Link to='/colors'><button>Color Schemes</button></Link> */}

            <AllProjects />
            <AboutMe />
            <Contact />


        </>
    )
}