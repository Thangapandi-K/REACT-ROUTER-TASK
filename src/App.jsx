import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage'
import Datascience from './components/Datascience'
import Fullstack from './components/Fullstack'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import All from './components/All'
import "./App.css"                                                                                                                  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/",
          element: <All />
        },
        {
          path: "/fsd",
          element: <Fullstack />
        },
        {
          path: "/datascience",
          element: <Datascience />
        },
        {
          path: "/cybersecurity",
          element: <Cybersecurity />
        },
        {
          path: "/career",
          element: <Career />
        }
      ]
    }
  ])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App