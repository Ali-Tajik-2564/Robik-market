import React from 'react'
import { useRoutes, Link } from "react-router-dom"
import './App.css'
import TopBar from './component/TopBar/TopBar'
import routes from './router'
import MainHeaders from './component/mainHeader/MainHeaders'
function App() {
  const route = useRoutes(routes)

  return (
    <>

      <TopBar />
      <MainHeaders />
      {route}


    </>
  )
}

export default App
