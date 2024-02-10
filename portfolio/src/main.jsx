import ReactDOM from 'react-dom/client'
import './styles/main.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import Colors from './components/Colors.jsx'
import SingleProject from './components/SingleProject.jsx'
import AboutMe from './components/AboutMe.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/colors',
        element: <Colors />
      },
      {
        path: '/projects/:id',
        element: <SingleProject />
      },
      {
        path: '/about',
        element: <AboutMe />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
