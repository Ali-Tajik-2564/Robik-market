import React from 'react'
import { useRoutes, Link } from "react-router-dom"
import './App.css'
import TopBar from './component/TopBar/TopBar'
import routes from './router'
function App() {
  const route = useRoutes(routes)

  return (
    <>

      <TopBar />
      {route}


    </>
  )
}

export default App
