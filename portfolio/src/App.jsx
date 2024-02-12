import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default App
