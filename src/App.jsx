import Nav from './components/Nav'
import Footer from './components/Footer'

import Contact from './components/Contact'
import AllProjects from './components//AllProjects'
import AboutMe from './components//AboutMe'
import Skills from './components/Skills'


export default function App() {

  return (
    <>
      <Nav />
      <div className="hero">
        <div className="name-box">
          <h1>DAN EDMUNDS</h1>
          <h3>Junior Developer</h3>
        </div>
      </div>
      {/* <Link to='/colors'><button>Color Schemes</button></Link> */}

      <main>
        <AllProjects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}